import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, OnDestroy {
  faCheck = faCheck;
  public clock: string;
  public date: Date;
  public intervalId: any;

  ngOnInit() {
    this.getClock();
  }

  getClock() {
    this.intervalId = setInterval(() => {
      this.startClock();
    }, 1000);
  }

  startClock(): void {
    this.date = new Date();
    const hour = this.date.getHours();
    const minutes = this.formatTime(this.date.getMinutes());
    const seconds = this.formatTime(this.date.getSeconds());
    this.clock = hour + ':' + minutes + ':' + seconds;
  }

  formatTime(i: number) {
    return i < 10 ? '0' + i : i;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
