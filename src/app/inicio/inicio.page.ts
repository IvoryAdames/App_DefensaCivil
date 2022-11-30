import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  slides: {img: string, titulo: string, desc: string}[] = [
    {
      img: 'assets/img/sliders/cap1.PNG',
      titulo: 'Defensa civil capacito al personal de la direccion general de aduanas',
      desc: 'Esta capacitación fue impartida por el instructor Kelvinson Cáceres, encargado de la División de Brigadas del Departamento de Operaciones.'
    },
    {
      img: 'assets/img/sliders/cap2.PNG',
      titulo: 'Pedro Álvarez, asesor de (vomade.vincit) visito la defensa civil',
      desc: 'En un encuentro afable y en busca de nuevos acercamientos, el director ejecutivo de la Defensa Civil y presidente de la Comisión Nacional de Emergencias (CNE) recibió Pedro Álvarez, asesor del Voluntariado de Madres Dominicanas en España (VOMADE.VINCIT).'
    },
    {
      img: 'assets/img/sliders/cap3.PNG',
      titulo: 'AUTORIDADES DE SAN JUAN RECIBEN “AGENDA TEMÁTICA PARA LA GESTIÓN DE RIESGOS”',
      desc: 'Esta actividad contó con el apoyo de la Unión Europea y se llevó a cabo en las instalaciones de la Gobernación Provincial de San Juan y fue encabezada por Juan Salas.'
    },
    {
      img: 'assets/img/sliders/cap4.PNG',
      titulo: 'Visita a pedernales',
      desc: 'en la Primera Vista Pública del proyecto de desarrollo turístico de esta provincia, que promete elevar el nombre del país a nivel internacional y al mismo tiempo, mejorar la calidad de vida de su gente.'
    },
    {
      img: 'assets/img/sliders/cap5.PNG',
      titulo: 'PERSONAL DE LA DEFENSA CIVIL REFRESCAN CONOCIMIENTO<br>EN PRIMEROS AUXILIO Y RESCATE',
      desc: 'Los entrenamientos los ofrecieron técnicos de la Escuela Nacional de Gestión de Riesgos (ESNAGERI) y personal de estas oficinas provinciales.'
    },
    {
      img: 'assets/img/sliders/cap6.PNG',
      titulo: 'DEFENSA CIVIL, GOBERNADORA DE EL SEIBO Y FUNDACIÓN<br>FERNÁNDEZ COORDINAN ACOGIDA DE UCRANIANOS',
      desc: 'Salas dijo que se trata de una acción preventiva que busca garantizar un espacio que tenga las condiciones adecuadas en caso de que esas personas así lo requieran.'
    },
    {
      img: 'assets/img/sliders/cap7.PNG',
      titulo: 'DEFENSA CIVIL CONFORMÓ LA ASOCIACIÓN<br>DE SERVIDOR PÚBLICO',
      desc: 'En conformidad a la Ley No. 41-08 de Función Pública, el pasado 7 de marzo del presente año, fue conformada la Asociación de Servidores Públicos de la Defensa Civil, con el objetivo de garantizar los derechos colectivos de los Servidores Públicos.'
    },
    {
      img: 'assets/img/sliders/cap8.PNG',
      titulo: 'LA DEFENSA CIVIL CONMEMORÓ EL DÍA<br>DE LA MUJER POR TODO LO ALTO',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap9.PNG',
      titulo: 'PERSONAL DE LA DEFESA CIVIL RECUPERARON CUERPO<br>DE HOMBRE EN LA PROVINCIA DUARTE',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap10.PNG',
      titulo: 'COMITÉ TÉCNICO NACIONAL SE REÚNE<br>EN MINISTERIO DE AGRICULTURA',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap11.PNG',
      titulo: 'EMBAJADOR DE REPÚBLICA DOMINICANA EN<br>CUBA VISITÓ LA DEFENSA CIVIL',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap12.PNG',
      titulo: 'LA DEFENSA CIVIL COORDINA ACCIONES<br>CON MIRAS A SEMANA SANTA',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap13.PNG',
      titulo: 'DIRECTOR EJECUTIVO DE LA DEFENSA<br>CIVIL VISITA LA REGIONAL OZAMA',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap14.PNG',
      titulo: 'DEFENSA CIVIL PARTICIPÓ EN TALLER PARA MEJORAR<br>LA TOMA DE DECISIONES ANTE INUNDACIONES',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap15.PNG',
      titulo: 'PERSONAL DE LA DEFENSA CIVIL PARTICIPÓ<br>EN SIMULACRO DE ACCIDENTE AÉREO',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap16.PNG',
      titulo: 'CNE FIRMA ACUERDO DE COOPERACIÓN CON ORGANIZACIÓN<br>INTERNACIONAL PARA LAS MIGRACIONES',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap17.PNG',
      titulo: 'DE CARA A SEMANA SANTA, DEFENSA CIVIL<br>REALIZA JORNADA DE REFORZAMIENTO<br>EN PRIMEROS AUXILIOS Y RESCATE ACUÁTICO',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap18.PNG',
      titulo: 'CNE Y OIM CAPACITARON INSTITUCIONES GESTORAS<br>DE ALOJAMIENTOS TEMPORALES EN EL PAÍS',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap19.PNG',
      titulo: 'DEFENSA CIVIL BRINDÓ APOYO A CRUCERO<br>ENCALLADO EN PUERTO PLATA',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap20.PNG',
      titulo: 'MINISTERIO DE LA MUJER RECONOCIÓ<br>VOLUNTARIA DE LA DEFENSA CIVIL',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap21.PNG',
      titulo: 'DEFENSA CIVIL Y EL MINISTERIO DE TURISMO<br>CAPACITÓ A PERSONAL HOTELERO',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap22.PNG',
      titulo: 'COMISIÓN NACIONAL DE EMERGENCIAS<br>REALIZÓ SU 3RA REUNIÓN ORDINARIA',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap23.PNG',
      titulo: 'MIEBROS DEL COMITÉ TECNICO PROVINCIAL DE<br>PUERTO PLATA RECIBE CAPACITANCIÓN',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap24.PNG',
      titulo: 'PERSONAL DE LA DEFENSA CIVIL REALIZÓ LEVANTAMIENTO<br>DE BALNEARIOS EN VALVERDE',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap25.PNG',
      titulo: 'DEFENSA CIVIL LANZÓ CAMPAÑA “APRENDIENDO A SALVAR VIDAS”<br>PREVIO A SEMANA SANTA',
      desc: ''
    },
    {
      img: 'assets/img/sliders/cap26.PNG',
      titulo: 'DEFENSA CIVIL PARTICIPO EN ACTIVIDADES POR LA<br>“SEMANA DEL AGUA PEDERNALES 2022”',
      desc: ''
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
