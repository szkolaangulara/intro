import { Component, Input, OnInit } from '@angular/core';
import { Status } from './status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public result: string;
  public evaluatedExpirationStatus: number;
  private stat: Status;

  @Input()
  public status: string;

  ngOnInit() {
    this.stat = new Status(this.status, 'PAYMENT', 400);
    this.result = `${this.stat.status}, ${this.stat.type}, ${this.stat.expirationTime}`;
    this.evaluatedExpirationStatus = this.stat.expirationTime * 90;
  }

  get evaluatedResult() {
    console.log('niestety');
    return this.evaluatedExpirationStatus;
  }

  changeMe() {
    console.log('button klikniety');
  }
}
