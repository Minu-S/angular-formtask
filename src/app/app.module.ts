import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularStorageModule } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule,AngularFireModule.initializeApp(environment.firebase), AngularStorageModule],
  declarations: [ AppComponent, HelloComponent, routingComponents, PageNotFoundComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
