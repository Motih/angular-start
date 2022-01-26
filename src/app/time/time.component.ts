import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-time',
  template: '{{ time | async }}',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  });
  constructor() { 


  }

  ngOnInit(): void {
  }

}
