import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  private zonjs = inject(NgZone);
  
  ngOnInit() {
    setTimeout(() => { 
      console.log("1 timer time out!");
    }, 
    2000);

    this.zonjs.runOutsideAngular(() => {
      setTimeout(() => { 
        console.log("2 timer time out!");
      }, 
      3000);
    });
  }   
  
  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
