import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    LayoutModule
  ],
  exports:[
    LayoutModule,
    ComponentsModule,
    LoginModule
  ]
})
export class UiModule { }
