import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-torvergata',
  templateUrl: './torvergata.component.html',
  styleUrls: ['./torvergata.component.scss']
})
export class TorvergataComponent implements OnInit {
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
