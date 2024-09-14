<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { EstadoService } from '../servicios/estado.service';
import { AnimationController } from '@ionic/angular';
=======
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el módulo para trabajar rutas de Angular
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { EstadoService } from '../servicios/estado.service';
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any;
  formulario: FormGroup;
  showCalendar: boolean = false;
<<<<<<< HEAD
  contador: number = 0;
=======
  contador: number = 0; // Variable para el contador
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9

  constructor(
    private estadoService: EstadoService,
    public fb: FormBuilder,
    private router: Router,
<<<<<<< HEAD
    public alertController: AlertController,
    private animationCtrl: AnimationController // Agregamos el controlador de animaciones
=======
    public alertController: AlertController
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nivelEducacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
    this.usuario = localStorage.getItem('f.usuario');
  }

  ngOnInit() {
    this.usuario = this.getUsuarioFromLocalStorage();
<<<<<<< HEAD
    console.log('ngOnInit el componente se ha inicializado');
=======

    // Mensaje de consola para depuración
    console.log('ngOnInit el componente se ha inicializado');

    // Suscribirse al observable para recibir actualizaciones de la variable
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
    this.estadoService.contadorActual.subscribe(valor => {
      this.contador = valor;
      console.log('ngOnInit Contador Actualizado', this.contador);
    });
  }

  limpiar() {
    this.formulario.reset();
  }

  navigateTologin() {
<<<<<<< HEAD
    this.router.navigate(['/login']);
  }

=======
    this.router.navigate(['/login']); // Navegamos hacia la página del detalle
  }

  // Método para navegar hacia atrás
  navigateBack() {
    this.router.navigate(['../']); // Navega hacia la página anterior o raíz
  }

  // Método para abrir el escáner (aquí se puede integrar un escáner QR si se añade)
  openScanner() {
    console.log('Método openScanner llamado');
    // Aquí deberías implementar la funcionalidad para abrir el escáner
  }

  // Función para obtener los datos del usuario desde el localStorage
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
  getUsuarioFromLocalStorage() {
    const usuarioString = localStorage.getItem('usuario');
    return usuarioString ? JSON.parse(usuarioString) : null;
  }

  async mostrar() {
    if (this.formulario.invalid) {
      const alert = await this.alertController.create({
        header: 'Formulario Incompleto',
        message: 'Por favor, complete todos los campos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    const formData = this.formulario.value;

    const alert = await this.alertController.create({
      header: 'Datos Ingresados',
      message: `Nombre: ${formData.nombre}\nApellido: ${formData.apellido}\nNivel Educación: ${formData.nivelEducacion}\nFecha Nacimiento: ${formData.fechaNacimiento}`,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

<<<<<<< HEAD
  ionViewWillEnter() {
    console.log('se ejecuta antes que la vista se muestre');
=======
  // Funciones del servicio
  ionViewWillEnter() {
    console.log('Se ejecuta antes de que la vista se muestre');
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
    console.log('ionViewWillEnter', this.contador);
  }

  ionViewDidEnter() {
<<<<<<< HEAD
    console.log('se ejecuta cuando la vista haya sido completamente cargada');
=======
    console.log('Se ejecuta cuando la vista haya sido completamente cargada');
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
    console.log('ionViewDidEnter', this.contador);
  }

  ionViewWillLeave() {
<<<<<<< HEAD
    console.log('se ejecuta cuando la vista esta apunto de desaparecer');
=======
    console.log('Se ejecuta cuando la vista está a punto de desaparecer');
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
    console.log('ionViewWillLeave', this.contador);
  }

  ionViewDidLeave() {
<<<<<<< HEAD
    console.log('se ejecuta cuando la vista ya desaparecio');
=======
    console.log('Se ejecuta cuando la vista ya desapareció');
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
    console.log('ionViewDidLeave', this.contador);
  }

  ngOnDestroy() {
<<<<<<< HEAD
    console.log('se ejecuta cuando la vista esta a punto de ser destruido');
    console.log('ngOnDestroy', this.contador);
  }

=======
    console.log('Se ejecuta cuando la vista está a punto de ser destruida');
    console.log('ngOnDestroy', this.contador);
  }

  // Métodos para incrementar el contador
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
  incrementarContador() {
    this.estadoService.incrementar();
  }

<<<<<<< HEAD
=======
  // Navegar hacia otra página
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
  navegarAOtraPagina() {
    this.router.navigate(['/otra-pagina']);
    this.estadoService.reiniciar();
  }
<<<<<<< HEAD

  animarBoton() {
    const boton = document.querySelector('.boton-animado');

    if (boton) {
      const animacion = this.animationCtrl.create()
        .addElement(boton)
        .duration(500)
        .fromTo('transform', 'scale(1)', 'scale(1.2)')
        .fromTo('background-color', '#000000', '#ff5722');
      animacion.play();
    } else {
      console.error("No existe la clase .boton-animado");
    }
  }

  animarTarjeta() {
    const tarjeta = document.querySelector('.tarjeta-animada');

    if (tarjeta) {
      const animacion = this.animationCtrl.create()
        .addElement(tarjeta)
        .duration(1000)
        .fromTo('transform', 'translateX(-100%)', 'translate(0%)')
        .fromTo('opacity', '0', '1');
      animacion.play();
    } else {
      console.error("No existe la clase .tarjeta-animada");
    }
  }
=======
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9
}
