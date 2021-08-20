import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogComponent } from '../dialog/dialog.component';
import { AVVOCATO, T2M, MOKA } from '../app.constants'
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


constructor(private x : Router, private ts: ThemeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    if(this.ts.modeBool === true) {
      this.mode = true;
    } else { this.mode = false}
    console.log(this.ts.modeBool)
    console.log(this.mode)
  }

  switchMode() {
    // this.mode = !this.mode;
    this.ts.switchMode();
    this.mode = this.ts.modeBool;
    console.log(this.mode)
    }

  goCV(){
    this.x.navigate(['cv'])
  }

  goWork(){
    this.x.navigate(['work'])
  }

  goTv(){
    this.x.navigate(['torvergata'])
  }

  goColors(){
    this.x.navigate(['colors'])
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

