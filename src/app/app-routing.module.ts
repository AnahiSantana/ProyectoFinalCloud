import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: ContentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }