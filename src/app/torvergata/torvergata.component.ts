import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-torvergata',
  templateUrl: './torvergata.component.html',
  styleUrls: ['./torvergata.component.css']
})
export class TorvergataComponent implements OnInit {
mode: boolean;

  constructor( private x : Router, private ts: ThemeService  ) { }

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
