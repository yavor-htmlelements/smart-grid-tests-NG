import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputModule } from 'smart-webcomponents-angular/input';
import { AppComponent } from './app.component';
import { GridModule } from 'smart-webcomponents-angular/grid';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, GridModule, InputModule],
    schemas: [],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }