import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})
export class SegundoComponent implements OnInit, AfterViewInit {

  @ViewChild('texto', {static: true} )titulo! : ElementRef 
  constructor(private render2: Renderer2) { }
  ngAfterViewInit(): void {
    console.log(this.titulo)
    this.render2.setAttribute(this.titulo.nativeElement,"id","32")
    this.render2.setStyle(this.titulo.nativeElement,"color","red")
  }

  ngOnInit(): void {
    
  }

}

