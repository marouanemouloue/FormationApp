import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage implements OnInit {
connected: boolean;
user:String;
formations : any;
keyRoute:string;
  constructor(public router : Router, public db: AngularFireDatabase) {
    this.connected=false;
  }
ngOnInit(): void {
//recuperer la liste des formations
this.db.list('Formations/').snapshotChanges().subscribe(actions => {
  this.formations = [];
  actions.forEach(action => {

    this.formations.push({
      key: action.key,
      Nom: action.payload.exportVal().Nom,
      Duree: action.payload.exportVal().Duree,
      Details: action.payload.exportVal().Details,
      Contenu : action.payload.exportVal().Contenu
      
    });
  
  }) 
 
});     

}

buttonDetails (){
this.router.navigateByUrl("details/"+this.keyRoute);
}

}
