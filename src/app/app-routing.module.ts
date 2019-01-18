import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
// tslint:disable-next-line:semicolon
})
export class AppRoutingModule { }
