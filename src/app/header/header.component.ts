import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  connected:boolean ;
  user:String;
  constructor(private router: Router) { 

   
  }
  
  ngOnInit() {
  }
  buttonLogin(){

    this.router.navigate(['/login']);  

  
  }
  isConnected(){
    
    return JSON.parse(localStorage.getItem('connected')) == true;
  
  }
  recap(){
    this.router.navigate(['/recap']);  
  }

}
