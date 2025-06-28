import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {ThemeService} from "./services/theme.service";



@NgModule({
  declarations: [AuthService, ThemeService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
