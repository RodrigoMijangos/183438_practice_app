import { Component } from '@angular/core';
import { Myclass } from '../classes/myclass';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  //template: '<h1>hola mundo</h1>'
})
export class HomeComponent {

  constructor(private service: MyService){}

  alumno = new Myclass(
    "183475",
    "ingenieria en software",
    "Alonso",
    "Martinez Arrueta",
    "LOJS061224HCSJRSA9",
    "LOJS061224U5W",
    "NASUGAUYS8751273NHJABSI",
    "LA VIDA ES DURA"
  )

  post = {
    title: "titulo 1",
    body: "cuerpo cualquiera",
    userId: 1
  }

  mostrar(): void {
    this.service.post(this.post).subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
