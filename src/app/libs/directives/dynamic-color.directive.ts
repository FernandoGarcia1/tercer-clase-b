import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective implements OnInit{

  @Input('dynamicColor') color : string = '';
  @Input('colorEnter') colorEnter : string = '';
  colorOriginal : string = '';
  sizeOriginal : string = '';
  flagSize : boolean = false;

  @HostListener('mouseenter') mouseenter(){
    this.element.nativeElement.style.color = this.colorEnter
  }


  @HostListener('click') mouseClick (){
    console.log(this)
    this.element.nativeElement.style.fontSize = '90px';

    
  }

  @HostListener('mouseleave') mouseLeave (){
    this.element.nativeElement.style.color = this.colorOriginal
  }
  constructor( private element: ElementRef) {
    
  }
  ngOnInit(): void {
    console.log(this.color)
    console.log(this.element.nativeElement.style)
    this.colorOriginal = this.element.nativeElement.style.color
    this.sizeOriginal=this.element.nativeElement.style.fontSize 
  }


}

