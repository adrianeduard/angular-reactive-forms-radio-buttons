import 'zone.js/dist/zone';
import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppRadioComponent } from './components/radio.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AppComponent, AppRadioComponent],
  bootstrap: [AppComponent],
})
export class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
