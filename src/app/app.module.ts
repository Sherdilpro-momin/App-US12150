import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OpenAIService } from './openai.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this import


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [OpenAIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
