import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../serviciosapi/getapi.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  public servicios: any [] = []

  constructor( private getapiService: GetapiService ) { }

  ngOnInit() {
    this.getservicios()
  }

  getservicios() {
    this.getapiService.getservicios().subscribe((data: any) => this.servicios = data.results)
  }

}
