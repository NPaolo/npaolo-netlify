import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { CvComponent } from './cv/cv.component';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoDesignerComponent } from './logo-designer/logo-designer.component';
import { TeachingComponent } from './teaching/teaching.component';
import { TorvergataComponent } from './torvergata/torvergata.component';
import { WorkComponent } from './work/work.component';

// MATERIAL
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

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
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
