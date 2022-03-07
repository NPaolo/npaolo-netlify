import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTI
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorsComponent } from './colors/colors.component';
import { CvComponent } from './cv/cv.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoDesignerComponent } from './logo-designer/logo-designer.component';
import { TeachingComponent } from './teaching/teaching.component';
import { TorvergataComponent } from './torvergata/torvergata.component';
import { WorkComponent } from './work/work.component';
import { HeaderComponent } from './header/header.component';

// MATERIAL
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// ANALYTICS
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';


@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    CvComponent,
    DialogComponent,
    HomepageComponent,
    LogoDesignerComponent,
    TeachingComponent,
    TorvergataComponent,
    WorkComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    NgxGoogleAnalyticsModule.forRoot('G-LW9HCX3DP2'),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
