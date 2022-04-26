import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQHwtbL9Luvo8fvVi_Itjc-boxRJTESw4",
  authDomain: "angular-d63d3.firebaseapp.com",
  projectId: "angular-d63d3",
  storageBucket: "angular-d63d3.appspot.com",
  messagingSenderId: "506426036268",
  appId: "1:506426036268:web:389c6a9df54d986149c189",
  measurementId: "G-LB68W9TPJC",
  databaseURL: "https://angular-d63d3-default-rtdb.europe-west1.firebasedatabase.app/"

};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
