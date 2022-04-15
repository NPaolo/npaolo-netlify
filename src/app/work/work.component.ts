import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
mode: string;
bgClass: string;
cardClass: string;

  constructor( private x : Router, private ts: ThemeService  ) { }

  ngOnInit(): void {
    this.mode = this.ts.globalMode;
    this.setThemeClass();
  }

  setMode(event) {
    this.mode = event;
    this.ts.switchMode(event);
    this.setThemeClass()
  }

  setThemeClass() {
    this.bgClass = this.ts.bgClass;
    this.cardClass = this.ts.cardClass;
  }
  
}
