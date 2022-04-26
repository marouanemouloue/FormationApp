import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderComponent } from '../header/header.component';
import { HomePageRoutingModule } from './home-routing.module';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RecapComponent } from './recap/recap.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
  HeaderComponent,
  DetailsComponent,
  LoginComponent,
  InscriptionComponent,
  RecapComponent
]
})
export class HomePageModule {}
