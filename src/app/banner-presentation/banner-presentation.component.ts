
import { Component, OnInit } from '@angular/core';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';
import Swal from 'sweetalert2'
import { AlertasService } from '../services-generals/alertas.service';
import BannerPresentation from '../Models/BannerPresentation';

@Component({
  selector: 'app-banner-presentation',
  templateUrl: './banner-presentation.component.html',
  styleUrls: ['./banner-presentation.component.css']
})
export class BannerPresentationComponent implements OnInit {
    bannerPresentation: BannerPresentation[];

    // estaLogueado(): boolean{
    //   this.loginService.estaLogueado();
    //   return this.loginService.retorno; 
    // }

  constructor  (
    private loginService:LoginServiceService,
    private serviceBackend:ServiceBackEndService,
    private actualizarDBservice: ActualizarDBService,
    private alerta:AlertasService
    ) {
        // this.serviceBackend.getBanner().subscribe(resp=>{
        //   this.bannerPresentation = Object.values(resp); 
        //   console.log(Object.values(resp));
        //   console.log(this.bannerPresentation);
          
        // });
      
     }
     //estados de los botones editar
     conectado(){
      return this.loginService.estaLogueado();
     }

     updateBanner(){
      this.actualizarDBservice.updateBanner(this.bannerPresentation);

      // this.actualizarDB.postBanner(this.bannerPresentation);
      // this.alerta.alertaUpdate("Banner Principal")      
    }

  ngOnInit(): void {
    this.actualizarDBservice.getBanner().subscribe(resp =>{
      this.bannerPresentation = resp;
     })
     console.log(this.bannerPresentation);
    
  }

}
