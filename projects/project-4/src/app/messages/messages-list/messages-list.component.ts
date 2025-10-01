import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit {
  private cdRef = inject(ChangeDetectorRef);
  private desRef = inject(DestroyRef);
  // messages = input.required<string[]>();
  private messageService = inject(MessageService);
  

  ngOnInit(): void {
    const subscription= this.messageService.messages$.subscribe(() => {
      // manually trigger change detection when the meessages change
      this.cdRef.markForCheck();
    });
    this.desRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  get messages(){
    return this.messageService.getMessages();
  }
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
