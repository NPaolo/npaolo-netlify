import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
mode: string;

constructor(private _snackBar: MatSnackBar, private x : Router, private ts: ThemeService) {}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}

  ngOnInit(): void {
    this.mode = this.ts.globalMode;
  }

  setMode(event) {
    this.mode = event;
    this.ts.switchMode(event);
    this.mode = this.ts.globalMode;
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

  setModeStyle() {
    switch (this.mode) {
      case 'light':
        return 'light-bg';
      case 'dark':
        return 'dark-bg';
      default:
        return 'light'
    }
  }

}
