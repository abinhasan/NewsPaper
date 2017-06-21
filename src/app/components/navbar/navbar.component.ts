import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  hotnews: any;

  constructor (
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService
  ) {
    this.user = afAuth.authState;
   }

  ngOnInit() {

    this.firebaseService.getHotNews().subscribe(hotnews => {
      let hotdata = hotnews.sort((n1,n2) => {
        return n2.startedAt - n1.startedAt;
      });
      
      this.hotnews = hotdata;
    });

  }
  today: number = Date.now();

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show('You are logged out',
      { cssClass: 'alert-danger', timeout: 3000 }
    );
  }

}
