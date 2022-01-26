import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-time',
  template: '{{ time | async }} {{timePromise | async}}',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  timer: any;
  time: Observable<string>;
  
  timePromise!: Promise<string>;
  resolve!: Function;

  constructor() {
    this.time = new Observable<string>((observer: Observer<string>) => {
      this.timer = setInterval(() => {
        observer.next(new Date().toLocaleTimeString());
        console.log('setInterval');
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.timePromise = new Promise<string> ((resolve, reject) => {
      this.resolve = resolve;
    });   
    this.resolve!(' Promise!');
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
