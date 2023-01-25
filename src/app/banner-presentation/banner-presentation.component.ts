
import { Component, OnInit } from '@angular/core';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';
import { AlertasService } from '../services-generals/alertas.service';
import BannerPresentation from '../Models/BannerPresentation';

@Component({
  selector: 'app-banner-presentation',
  templateUrl: './banner-presentation.component.html',
  styleUrls: ['./banner-presentation.component.css']
})
export class BannerPresentationComponent implements OnInit {
    bannerPresentation: BannerPresentation[];

  constructor  (
    private loginService:LoginServiceService,
    private serviceBackend:ServiceBackEndService,
    private actualizarDBservice: ActualizarDBService,
    private alerta:AlertasService
    ) {      
     }
     //estados de los botones editar
     conectado(){
      return this.loginService.estaLogueado();
     }

     async updateBanner(){
      await this.actualizarDBservice.updateBanner(this.bannerPresentation); 
    }

  ngOnInit(): void {
    this.actualizarDBservice.getBanner().subscribe(resp =>{
      this.bannerPresentation = resp;
     })    
  }
}
