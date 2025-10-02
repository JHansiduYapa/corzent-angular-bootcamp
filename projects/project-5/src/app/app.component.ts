import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  // click count
  clickcount = signal(0);
  // make it observable
  clickcount$ = toObservable(this.clickcount);
  
  // make a custom observable
  // observer pass a subscriber object to the function
  // this use when to emit value based on some event  
  customInterval$ = new Observable((subscriber)=>{
    setInterval(()=>{
      subscriber.next('hi from observable');
    }, 2000);
  });

  // subscribe to the observable
  customIntervalSub = this.customInterval$.subscribe({
    next: (val) => console.log(val)
  });

  ngOnInit(): void {
    this.clickcount$.subscribe({next: (val) => console.log(`Count value: ${val}`)});
  }

  // click handler
  onClick(){
    this.clickcount.update(clickcount => clickcount + 1);
  }
}
