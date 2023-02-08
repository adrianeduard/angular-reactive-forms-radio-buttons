import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { AppRadioComponent } from './components/radio.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BrowserModule],
  declarations: [AppComponent, AppRadioComponent],
  bootstrap: [AppComponent],
})
export class MainModule {}
