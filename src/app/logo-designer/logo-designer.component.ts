import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';
import { AVVOCATO, T2M, MOKA, logos } from '../app.constants'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-logo-designer',
  templateUrl: './logo-designer.component.html',
  styleUrls: ['./logo-designer.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('150ms ease-out')),
      transition('inactive => active', animate('150ms ease-in'))
    ])
  ]
})
export class LogoDesignerComponent implements OnInit {
  mode : boolean;

  readonly AVVOCATO = AVVOCATO;
  readonly T2M = T2M;
  readonly MOKA = MOKA;
  readonly logos = logos;

  constructor( private x : Router, private ts: ThemeService ) { }

  ngOnInit(): void {
    if(this.ts.modeBool === true) {
      this.mode = true;
      this.logos.find(element => element.title === 'Time To Marketing').image = 'assets/t2m-dark.png'
    } else { 
      this.mode = false;
      this.logos.find(element => element.title === 'Time To Marketing').image = 'assets/t2m.png'
    }
  }


  // flip: string = 'inactive';

  toggleFlip(index: number) {
    this.logos[index].flip = (this.logos[index].flip == 'inactive') ? 'active' : 'inactive';
  }

  switchMode() {
    this.ts.switchMode();
    this.mode = this.ts.modeBool;
    if (this.mode === true) {
      this.logos.find(logo => logo.title === 'Time To Marketing').image = 'assets/t2m-dark.png';
    } else {
      this.logos.find(logo => logo.title === 'Time To Marketing').image = 'assets/t2m.png';
    }
    console.log(this.mode)
}

goHome(){
  this.x.navigate(['/']);
}}
