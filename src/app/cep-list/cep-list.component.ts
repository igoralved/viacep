import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Cep, ceps } from '../ceps';
@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.css'],
})
export class CepListComponent {
  ceps = ceps;

  valido(cep: Cep) {
    if (cep.campo.length != 8) {
      return false;
    }
    for (var i = 0; i < cep.campo.length; i++) {
      switch (cep.campo[i]) {
        case '0':
          break;
        case '1':
          break;
        case '2':
          break;
        case '3':
          break;
        case '4':
          break;
        case '5':
          break;
        case '6':
          break;
        case '7':
          break;
        case '8':
          break;
        case '9':
          break;
        default:
          return false;
      }
    }
    return true;
  }
}
