import { Component, Input, OnInit } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'swal-modal',
  template: ''
})
export class SweetAlertComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() icon: SweetAlertIcon = 'info';

  constructor() {}

  ngOnInit(): void {
    Swal.fire({
      title: this.title,
      text: this.message,
      icon: this.icon
    });
  }
}
