import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

export const routes: Routes = [
{path:'',component :HomeComponent},
{path:'about',component :AboutComponent},
{path: 'portfolio' ,component:PortfolioComponent},
{path:'contact',component :ContactComponent},
{path:'**',component:NotfoundComponent},
];
