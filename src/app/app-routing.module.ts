import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './home/details/details.component';
import { InscriptionComponent } from './home/inscription/inscription.component';
import { LoginComponent } from './home/login/login.component';
import { RecapComponent } from './home/recap/recap.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'login',component :LoginComponent},

  {path:'inscription',component :InscriptionComponent},
  
  {path:'details/',component : DetailsComponent},

  
  {path:'details/:key',component : DetailsComponent},
  {path:'recap',component : RecapComponent},

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
