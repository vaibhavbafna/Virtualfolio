import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
const routes: Routes = [


  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Blog', component: BlogComponent},
  { path: 'Contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
