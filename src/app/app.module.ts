import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailsPostComponent } from './components/details-post/details-post.component';
import { DetailsVideoComponent } from './components/details-video/details-video.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { AllVideoComponent } from './components/all-video/all-video.component';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'news/:id', component: DetailsPostComponent },
  { path: 'video/:id', component: DetailsVideoComponent },
  { path: 'allnews', component: AllPostComponent },
  { path: 'allvideos', component: AllVideoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AddPostComponent,
    SafePipe,
    DetailsPostComponent,
    DetailsVideoComponent,
    AllPostComponent,
    AllVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
