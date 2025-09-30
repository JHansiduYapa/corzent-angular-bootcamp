import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  // make the type of currentStatus to be either 'online', 'offline' or 'unknown'
  currentStatus= signal<'online'|'offline'|'unknown'>('online');
  // make a reference to the timeout to clear it later
  private interval? : ReturnType<typeof setInterval>;

  
  // constuctor is used for class initialization
  constructor() {
    // use effect method to log the current status whenever it changes
    effect(()=> {
      console.log('Current status: ', this.currentStatus());
    })
  } 

  // and change current status to offline and online and unknown every 1 seconds
  // randomly
  ngOnInit() {
    console.log('ServerStatusComponent initialized');
    this.interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.33) {
        this.currentStatus.set('offline');
      } else if (random < 0.66) {
        this.currentStatus.set('online');
      } else { 
        this.currentStatus.set('unknown');
      }
    }, 1000); 
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

}
