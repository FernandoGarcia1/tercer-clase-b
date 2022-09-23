import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorDirective } from './libs/directives/color.directive';
import { PrimeroComponent } from './components/primero/primero.component';
import { DynamicColorDirective } from './libs/directives/dynamic-color.directive';
import { SegundoComponent } from './components/segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    PrimeroComponent,
    DynamicColorDirective,
    SegundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
