import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';
import { AVVOCATO, T2M, MOKA, logos } from '../app.constants'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-logo-designer',
  templateUrl: './logo-designer.component.html',
  styleUrls: ['./logo-designer.component.scss'],
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
  mode: string;
  bgClass: string;
  cardClass: string;
  loading = true;

  readonly AVVOCATO = AVVOCATO;
  readonly T2M = T2M;
  readonly MOKA = MOKA;
  readonly logos = logos;

  constructor( private x : Router, private ts: ThemeService ) { }

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

  toggleFlip(index: number) {
    this.logos[index].flip = (this.logos[index].flip == 'inactive') ? 'active' : 'inactive';
  }

  onLoad() {
    this.loading = false;
  }

}
