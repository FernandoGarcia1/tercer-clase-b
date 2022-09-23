import { Component, OnInit } from '@angular/core';

enum PAISES {
  'MEXICO',
  'ARGENTINA',
  'CANADA'
}

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {
  public PAISES = PAISES;
  public flag : boolean = true;
  public paises : any [] = [
    {
      id: 1,
      name : 'Mexico'
    },
    {
      id:2,
      name : 'Argentina'
    },
    {
      id:3,
      name: 'Canada'
    }
  ]
  //'Taco', 'Maple', 'Chorizo'
  public platillo : string = 'Taco';
  public platillos : any [] = [
    {
      platillo: 'Taco',
      pais : PAISES.MEXICO
    },
    {
      platillo: 'Pambazo',
      pais: PAISES.MEXICO
    },
    {
      platillo: 'Poutine',
      pais: PAISES.CANADA
    },
    {
      platillo: 'Maple',
      pais: PAISES.CANADA
    },
    {
      platillo: 'Chorizo',
      pais: PAISES.ARGENTINA
    }
    ];


  constructor() { }

  ngOnInit(): void {
    this.getButton()
  }

  getButton(){
    let button = document.getElementById('btn')
    button?.addEventListener('click', () =>{
      this.flag = !this.flag;
      console.log('click', this.flag)
    })
  }

}
