import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  // alertas de add delete y update ///////////////
  alertaAdd(){
    Swal.fire({
      title: 'Agregado Exitosamente!', 
      text: "",
      icon: 'success',
      timer: 4000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  alertaUpdate(texto:string){
    Swal.fire({
      title: 'Cambios Guardados Exitosamente!',
      text: texto,
      icon: 'success',
      timer: 4000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  alertaDelete(texto:string){
    Swal.fire({
      title: 'Eliminación Exitosa!',
      text: texto,
      icon: 'info',
      timer: 4000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  // alertas de login ////////////////////
  alertaEmail(){
    Swal.fire({
      icon: 'error',
      title: 'Ingresaste un email Invalido!',
      text: 'Corrija e intente nuevamente',
      showConfirmButton: true,
      confirmButtonText: 'Cerrar',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }
    alertaContrasena(){
      Swal.fire({
        icon: 'error',
        title: 'Ingresaste una contrasena Invalida!',
        text: 'Corrija e intente nuevamente',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }
  
    // alertas del servicio Login //////
    alertaInicioSesion(texto:string){
      Swal.fire({
        title: 'Inicio de sesion exitoso, Bienvenido',
        text: texto,
        icon: 'success',
        timer: 4000,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }); 
    }

    alertaLoginContrasena(){
      Swal.fire({
        icon: 'error',
        title: 'Ingresaste una contrasena Invalida!',
        text: 'Corrija! e intente nuevamente',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }

    alertaLoginEmail(){
      Swal.fire({
        icon: 'error',
        title: 'Ingresaste un email Invalido!',
        text: 'Corrija! e intente nuevamente',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }

    alertaInesperada(texto?:any){
      Swal.fire({
        icon: 'question',
        title: 'Ups... Error inesperado!',
        text: 'Vuelva a intentar mas tarde! error: ' + texto,
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }

    alertaBloqueado(){
      Swal.fire({
        icon: 'question',
        title: 'Ups... Cuenta suspendida!',
        text: 'Estas suspendido temperalmente, demasiados intentos fallidos! espera 24Hrs.',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }



  constructor() { }
}
