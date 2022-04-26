import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss'],
})
export class RecapComponent implements OnInit {
  keyRoute:string;
  emailCo : string;
  formations : any;
  constructor(public router : Router, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.emailCo = localStorage.getItem("email");
    this.db.list('Formations/').snapshotChanges().subscribe(actions => {
      this.formations = [];
      actions.forEach(action => {
    
        var userInscrits = JSON.parse(localStorage.getItem(action.payload.exportVal().Nom));
        if(userInscrits != null){
          for( var i = 0 ; i< userInscrits.length;i++ ){
            if(userInscrits[i] == this.emailCo){
        this.formations.push({
          key: action.key,
          Nom: action.payload.exportVal().Nom,
          Duree: action.payload.exportVal().Duree,
          Details: action.payload.exportVal().Details,
          Contenu : action.payload.exportVal().Contenu
          
        })}}
      };
      
      }) 
     
    });   

  }
  seDeconnecter(){    
    localStorage.removeItem("connected");
    this.router.navigateByUrl("home");

  }

  buttonDetails (){
    this.router.navigateByUrl("details/"+this.keyRoute);
    }

}
