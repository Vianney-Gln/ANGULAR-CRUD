import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  //config Firebase
  private _firebaseConfig = {
    apiKey: "AIzaSyAr6kWMth8eAuV-arP_iu0Sxs933CnjdcM",
    authDomain: "list-video-games.firebaseapp.com",
    databaseURL: "https://list-video-games-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "list-video-games",
    storageBucket: "list-video-games.appspot.com",
    messagingSenderId: "876715667140",
    appId: "1:876715667140:web:ca73580e184ed5ce21e391"
  };

  //init firebase
  app = initializeApp(this._firebaseConfig);
  db = getFirestore(this.app);

  constructor() { }
}
