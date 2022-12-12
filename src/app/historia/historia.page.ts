import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  constructor() { }

  ngOnInit() {
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

}
