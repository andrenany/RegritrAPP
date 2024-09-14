import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular'; // Se añadió ModalController para controlar los modales
import { EstadoService } from '../../servicios/estado.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component'; // Se añadió para el modal de reseteo de contraseña

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private estadoService: EstadoService,
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    private modalController: ModalController // Controlador de modal para abrir un modal en la UI
  ) {
    this.loginForm = this.fb.group({
      'usuario': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      'password': new FormControl("", [Validators.required, Validators.pattern(/^\d{4}$/)]),
    });
  }

  ngOnInit(): void {}

  // Función para navegar hacia la página de registro (interacción de navegación en la UI)
  navigateToregistro() {
    this.router.navigate(['/registro']);
    this.estadoService.reiniciar();
  }

  // Función para ingresar (interacción que muestra alertas en la UI)
  async ingresar() {
    if (this.loginForm.valid) {
      const f = this.loginForm.value;
      const usuarioString = localStorage.getItem('usuario');

      if (!usuarioString) {
        await this.presentAlert('Error', 'No hay usuarios registrados'); // Visualización de alerta
        return;
      }

      const usuario = JSON.parse(usuarioString);

      if (usuario.usuario === f.usuario && usuario.password === f.password) {
        this.router.navigate(['/home']); // Navegación a la página Home (interacción visual)
        this.estadoService.reiniciar();
      } else {
        await this.presentAlert('Datos incorrectos', 'Nombre de usuario o contraseña incorrectos'); // Visualización de alerta
      }
    } else {
      await this.presentAlert('Formulario inválido', 'Por favor, completa todos los campos correctamente'); // Visualización de alerta
    }
  }

  // Función para mostrar una alerta visual
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  // Función para abrir un modal de reseteo de contraseña (interacción visual)
  async openResetPassword() {
    const modal = await this.modalController.create({
      component: ResetPasswordComponent // Componente que se mostrará en el modal
    });
    return await modal.present();
  }
}
