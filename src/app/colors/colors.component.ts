import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
mode : boolean;

constructor(private _snackBar: MatSnackBar, private x : Router, private ts: ThemeService) {}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}

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

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }



}
