import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirebaseService } from './firebase.service';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule,AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, AngularFireAuthModule],
  declarations: [ AppComponent, HelloComponent, routingComponents, PageNotFoundComponent,],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})
export class AppModule { }
