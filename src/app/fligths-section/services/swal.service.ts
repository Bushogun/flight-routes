import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  showLoadingAlert() {
    Swal.fire({
      title: 'Cargando',
      html: 'Buscando Rutas',
      timerProgressBar: true,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  }

  showErrorAlert(message: string) {
    Swal.fire('Error', message, 'error');
  }

  showSuccessAlert(message: string) {
    Swal.fire('Success', message, 'success');
  }

  closeAlert() {
    Swal.close();
  }
}
