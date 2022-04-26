import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  constructor(public auth : AngularFireAuth,public router:Router, public toastController: ToastController) { }

  ngOnInit() {}
  async toastSucces() {
    const toast = await this.toastController.create({
      message: 'Inscrit(e) avec succées.',
      duration: 3000,
      color: "success"
    });
    toast.present();
  }
  register(form){
    this.auth.createUserWithEmailAndPassword(form.value.email,form.value.password).then((res) => {
      localStorage.setItem("connected","true");
      this.router.navigateByUrl('home');
      this.toastSucces();
      
    });
  }
}

