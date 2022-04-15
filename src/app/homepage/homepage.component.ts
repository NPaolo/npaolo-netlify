import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AVVOCATO, T2M, MOKA, CCN, logos } from '../app.constants'
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
mode: string;
bgClass: string;
homeCardClass: string;
cardClass: string;

readonly AVVOCATO = AVVOCATO;
readonly T2M = T2M;
readonly MOKA = MOKA;
readonly CCN = CCN;
readonly logos = logos


constructor(private x : Router, private ts: ThemeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.mode = this.ts.globalMode;
    this.setThemeClass()
  }

  setMode(event) {
    this.mode = event;
    this.ts.switchMode(event);
    this.setThemeClass()
  }

  setThemeClass() {
    this.bgClass = this.ts.bgClass;
    this.homeCardClass = this.ts.homeCardClass;
    this.cardClass = this.ts.cardClass;
  }

  goCV(){
    this.x.navigate(['cv']);
    window.scrollTo(0, 0)
  }

  goWork(){
    this.x.navigate(['work']);
    window.scrollTo(0, 0)
  }

  goTv(){
    this.x.navigate(['torvergata']);
    window.scrollTo(0, 0)
  }

  goColors(){
    this.x.navigate(['colors']);
    window.scrollTo(0, 0)
  }

  openDialog(title: string, description: string, image: string, url: string, color: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: title,
        description: description,
        image: image,
        url: url,
        color: color
      }
    });
  }

}

