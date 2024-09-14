import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit(){
    this.animarIcono(); //INICIA LA ANIMACIÓN DE UN ICONO
  }

  //MÉTODO PARA ANIMAR UN BOTÓN
  animarBoton(){
    //SELECTOR DE UN ELEMENTO EN EL HTML
    const boton = document.querySelector('.boton-animado');

    if(boton){
      const animacion = this.animationCtrl.create()
      .addElement(boton) //AGREGAMOS LA VARIABLE QUE ALMACENA LA CLASE O EL SELECTOR
      .duration(500) //CUANTO DURA MI ANIMACIÓN
      .fromTo('transform', 'scale(1)', 'scale(1.2)') 
      .fromTo('background-color', '#000000', '#ff5722')
      animacion.play(); //QUE SE EJECUTE LA ANIMACION
    } else{
      console.error("No existe la clase .boton-animado");
    }
  
  }

  //MÉTODO PARA ANIMAR UN ICONO
  animarIcono(){
    const icono = document.querySelector('.icono-rotativo');

    if(icono){
      const animacion = this.animationCtrl.create()

      .addElement(icono)
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)')
      animacion.play(); //QUE SE EJECUTE LA ANIMACION
      
    }else{
      console.error("No existe la clase .icono-rotativo");
    }

  }

  //METODO PARA ANIMAR UNA TARJETA O UNA CARD
  animarTarjeta(){
    const tarjeta = document.querySelector('.tarjeta-animada');

    if(tarjeta){
      const animacion = this.animationCtrl.create()
      .addElement(tarjeta)
      .duration(1000)
      .fromTo('transform', 'translateX(-100%)','translate(0%)') //DESLIZAR LA TARJETA OCULTA PARA QUE SEA VISIBLE
      .fromTo('opacity', '0', '1')
      animacion.play();
    }else{
      console.error("No existe la clase .tarjeta-animada");
    }
  }
}

