import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { CvComponent } from './cv/cv.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoDesignerComponent } from './logo-designer/logo-designer.component';
import { TeachingComponent } from './teaching/teaching.component';
import { TorvergataComponent } from './torvergata/torvergata.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  // {path: 'colors', component: ColorsComponent},
  {path: 'torvergata', component: TorvergataComponent},
  // {path: 'cv', component: CvComponent},
  // {path: 'work', component: WorkComponent},
  // {path: 'teaching', component: TeachingComponent},
  // {path: 'teaching', component: TeachingComponent},
  // {path: 'logo-designer', component: LogoDesignerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
