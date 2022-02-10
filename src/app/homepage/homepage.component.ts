import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AVVOCATO, T2M, MOKA, CCN, logos } from '../app.constants'
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
mode : boolean;

readonly AVVOCATO = AVVOCATO;
readonly T2M = T2M;
readonly MOKA = MOKA;
readonly CCN = CCN;
readonly logos = logos


constructor(private x : Router, private ts: ThemeService, public dialog: MatDialog) {}

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

