
import { Component, OnInit } from '@angular/core';
import { BannerPresentation } from '../Models/BannerPresentation';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';
import Swal from 'sweetalert2'
import { AlertasService } from '../services-generals/alertas.service';

@Component({
  selector: 'app-banner-presentation',
  templateUrl: './banner-presentation.component.html',
  styleUrls: ['./banner-presentation.component.css']
})
export class BannerPresentationComponent implements OnInit {
    bannerPresentation: BannerPresentation;

    // estaLogueado(): boolean{
    //   this.loginService.estaLogueado();
    //   return this.loginService.retorno; 
    // }

  constructor  (
    private loginService:LoginServiceService,
    private serviceBackend:ServiceBackEndService,
    private actualizarDB: ActualizarDBService,
    private alerta:AlertasService
    ) {
        this.serviceBackend.getBanner().subscribe(resp=>{
          this.bannerPresentation = resp; 
          
        });
      
     }
     //estados de los botones editar
     conectado(){
      return this.loginService.estaLogueado();
     }

    guardarBanner(){
      this.actualizarDB.postBanner(this.bannerPresentation);
      this.alerta.alertaUpdate("Banner Principal")      
    }

  ngOnInit(): void {
    
  }

}
