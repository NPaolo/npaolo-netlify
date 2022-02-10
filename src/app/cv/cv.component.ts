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
})
export class CvComponent implements OnInit {
mode : boolean;
  constructor( private x : Router, private ts: ThemeService ) { }

  ngOnInit(): void {
    if(this.ts.modeBool === true) {
      this.mode = true;
    } else { 
      this.mode = false
    }
  }

  setMode(event) {
    this.mode = event;
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
