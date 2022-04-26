import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  messErreur : string;
  con:boolean;
  email:string;

  constructor(public auth : AngularFireAuth,public route : Router, public toastController: ToastController) { }

  ngOnInit() {
  }
  async toastSucces() {
    const toast = await this.toastController.create({
      message: 'Vous êtes desormais connecté(e).',
      duration: 4000,
      color: "success"
    });
    toast.present();
  }
async login(form){
try{
  const res = await this.auth.signInWithEmailAndPassword(form.value.email,form.value.password)
  if(res){

    localStorage.setItem("connected","true");
    localStorage.setItem("email",form.value.email);
    
    this.route.navigateByUrl('home');
    this.toastSucces();
        
  }

}catch(e){
  if(e.code === "auth/user-not-found") {
    this.messErreur="Utilisateur introuvable";
  }else if(e.code == "auth/invalid-email"){
    this.messErreur="Format email invalide";
  }
  else{this.messErreur="Mot de passe ou email incorrect";}
  this.route.navigateByUrl('login');
}
}
}


