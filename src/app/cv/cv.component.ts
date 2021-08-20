import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';
import { Router } from '@angular/router';
declare var require: any
const FileSaver = require('file-saver');
import { ThemeService } from '../theme.service'


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: [
    trigger('Web', [
      state('small', style({ height : '0px' })),
      state('short', style({ height : '30px' })),
      state('medium', style({ height: '80px' })),
      state('large', style({ height : '130px' })),
      transition('small <=> short', animate('400ms ease-in')),
      transition('small <=> medium', animate('400ms ease-in')),
      transition('small <=> large', animate('400ms ease-in')),
    ]),
    trigger('Mob', [
      state('small', style({ height : '0px' })),
      state('short', style({ height : '50px' })),
      state('medium', style({ height: '130px' })),
      state('large', style({ height : '225px' })),
      transition('small <=> short', animate('400ms ease-in')),
      transition('small <=> medium', animate('400ms ease-in')),
      transition('small <=> large', animate('400ms ease-in')),
    ]),
  ],
  
})
export class CvComponent implements OnInit {
mode : boolean;
stateDeg = 'small'
stateEu = 'small'
stateBk = 'small'

  constructor( private x : Router, private ts: ThemeService ) { }

  ngOnInit(): void {
    if(this.ts.modeBool === true) {
      this.mode = true;
    } else { this.mode = false}
    console.log(this.ts.modeBool)
    console.log(this.mode)
  }

  switchMode() {
    this.ts.switchMode();
    this.mode = this.ts.modeBool;
    console.log(this.mode)
}

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

animateDeg() {
  this.stateDeg = (this.stateDeg === 'small' ? 'large' : 'small')
}
animateEu(){
  this.stateEu = (this.stateEu === 'small' ? 'medium' : 'small')
}
animateBk(){
  this.stateBk = (this.stateBk === 'small' ? 'short' : 'small')

}

goHome(){
  this.x.navigate(['/'])
}

goTv(){
  this.x.navigate(['torvergata'])
}

}
