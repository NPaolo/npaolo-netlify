import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  mode : boolean;

  constructor( private x : Router, private ts: ThemeService ) { }

  ngOnInit(): void {
    if(this.ts.modeBool === true) {
      this.mode = true;
    } else { this.mode = false}
    console.log(this.ts.modeBool)
    console.log(this.mode)
  }

  setMode(event) {
    this.mode = event;
  }
  
}
