import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit {

  public now: Date = new Date();

  public value: 'working' | 'pause' = 'pause';

  public logs: Date[];

  public logsv2: any[];

  // 
  public goal = '08:00:00';
  public remaining = '0';

  constructor() {
    this.logs = [ ];
    this.logsv2 = [
      null
    ];

    setInterval(() => {
      this.now = new Date();
      this.timeRemaining();
    }, 1000);
  }

  public display(log: string | null): string {
    return log || '--:--:--';
  }

  public merge() {
    for (let i = 0; i < this.logs.length; i++) {
      this.logsv2[i] = this.logs[i];
    }
    return this.logsv2;
  }

  public toggle(): void {
    if (this.value === 'pause') {
      this.start();
    } else {
      this.pause();
    }
  }

  private start(): void {
    this.value = 'working';
    this.logs.push(new Date());
  }

  private pause(): void {
    this.value = 'pause';
    this.logs.push(new Date());
  }

  public parseGoal(): number {
    const arr: string[] = this.goal.split(':');

    const h = +arr[0];
    const m = +arr[1];
    const s = +arr[2];
    return ((h * 60 * 60) + (m * 60) + s) * 1000;
  }

  public hoursToMillis(date: Date): number {
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      return ((h * 60 * 60) + (m * 60) + s) * 1000;
  }

  public timeRemaining(): string {
    const logs = [...this.logs];
    const goalInMs = this.parseGoal();

    let logInProgress: Date | null = null;
    let workDoneInMs = 0;

    if (logs.length % 2 === 1) {
      logInProgress = logs.slice(logs.length - 1)[0];
    }

    logs.forEach((value, index) => {
      if (index > 0 && (index + 1) % 2 === 0) {
        workDoneInMs += this.hoursToMillis(this.logs[index]) - this.hoursToMillis(this.logs[index - 1]);
      }
    });

    if (logInProgress) {
      workDoneInMs += this.hoursToMillis(new Date()) - this.hoursToMillis(logInProgress);
    }

    const remainigMs = (goalInMs - workDoneInMs);

    this.remaining = new Date(remainigMs).toISOString().substr(11, 8);

    return new Date(this.parseGoal() * 1000).toISOString().substr(11, 8);
  }

  ngOnInit(): void {

  }

}
