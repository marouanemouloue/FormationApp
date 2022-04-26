import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  formations: any = [];
  userInscrits: any = [];
  nom_formation;
  constructor(private route: ActivatedRoute, public db: AngularFireDatabase, public toastController: ToastController) { }
  @Input() list: any[];

  ngOnInit(): void {

    //recuperer les informations de cette formation
    var key = this.route.snapshot.paramMap.get('key');
    this.userInscrits = JSON.parse(localStorage.getItem(this.formations.Nom));

    this.db.object('Formations/' + key).valueChanges().subscribe(val => {
      this.formations.push(val);
      this.nom_formation = this.formations[0].Nom;
      
    });
    
  }

  async toastFail() {
    const toast = await this.toastController.create({
      message: 'Veuillez-vous connecter d abord.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }
  async toastSucces() {
    const toast = await this.toastController.create({
      message: 'Inscrit(e) avec succées, vous allez recevoir le cours par email.',
      duration: 3000,
      color: "success"
    });
    toast.present();
  }
  verifierInscrit() {
    var inscrit: Boolean = false;
    var userInscrits = JSON.parse(localStorage.getItem(this.nom_formation));
    if (JSON.parse(localStorage.getItem('connected'))) {
    if(userInscrits != null)
    {
      for (var i = 0 ;i<userInscrits.length;i++) {
        if (userInscrits[i] == localStorage.getItem("email")) { //parcourir la liste des users inscrits et verifier avec celui qui est connecté
          inscrit = true;
        }
      }}
    }
    return inscrit;
  }
  inscriptionFormation() {
    var userEmail = localStorage.getItem("email"); //recuperer email du user connecté
    if (JSON.parse(localStorage.getItem('connected'))) { 
      var userInscrits = JSON.parse(localStorage.getItem(this.nom_formation)); //recuperer les users enregistrés dans cette formation
      if (userInscrits == null) {
        userInscrits = [];
      }
      
      userInscrits.push(userEmail); //ajouter email à la liste des users connectés
      localStorage.setItem(this.nom_formation, JSON.stringify(userInscrits));
      this.toastSucces();
    } else {
      this.toastFail();
    }
  }
}
