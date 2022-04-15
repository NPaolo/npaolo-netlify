import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';
import { Router } from '@angular/router';
declare var require: any
const FileSaver = require('file-saver');
import { ThemeService } from '../theme.service'


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],  
})
export class CvComponent implements OnInit {
mode: string;
bgClass: string;
cardClass: string;

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

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  goTv(){
      this.x.navigate(['torvergata']);
    window.scrollTo(0, 0)
  }

  goDesign(){
    this.x.navigate(['logo-designer']);
    window.scrollTo(0, 0)
  }

}
