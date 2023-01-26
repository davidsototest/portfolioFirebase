import { Component, OnInit } from '@angular/core';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footer: any;
  constructor(private actualizarDBservice: ActualizarDBService,
              private loginService: LoginServiceService) { }

  conectado(){
    return this.loginService.estaLogueado();
   }

   async updateFooter(){
    await this.actualizarDBservice.updateFooter(this.footer);
   }

  ngOnInit(): void { 
    this.actualizarDBservice.getFooter().subscribe(resp =>{
      this.footer = resp;
     }) 
  }

}
