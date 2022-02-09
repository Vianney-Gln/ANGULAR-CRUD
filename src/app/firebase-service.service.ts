import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore/lite';

const TABLEGAME: string = 'list-video-games';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  //constructor
  constructor() {}

  //config Firebase
  private _firebaseConfig = {
    apiKey: 'AIzaSyAr6kWMth8eAuV-arP_iu0Sxs933CnjdcM',
    authDomain: 'list-video-games.firebaseapp.com',
    databaseURL:
      'https://list-video-games-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'list-video-games',
    storageBucket: 'list-video-games.appspot.com',
    messagingSenderId: '876715667140',
    appId: '1:876715667140:web:ca73580e184ed5ce21e391',
  };

  //init firebase
  app = initializeApp(this._firebaseConfig);
  db = getFirestore(this.app);

  //function getting all games from db
  public async getAllGames(): Promise<{ data: DocumentData; id: string }[]> {
    try {
      const GAME_COLLECTION = collection(this.db, TABLEGAME);
      const GAME_SNAPSHOT = await getDocs(GAME_COLLECTION);
      return GAME_SNAPSHOT.docs.map((doc) => {
        return {
          data: doc.data(),
          id: doc.id,
        };
      });
    } catch {
      throw new Error();
    }
  }
  //function getting one game by his id
  public async getGameById(id: string) {
    try {
      const DOC_REF: DocumentReference<DocumentData> = doc(
        this.db,
        TABLEGAME,
        id
      );
      const DOC_SNAP: DocumentSnapshot<DocumentData> = await getDoc(DOC_REF);
      return DOC_SNAP.data();
    } catch {
      throw new Error();
    }
  }

  //function adding a game in db
  public async addGame(
    title: string,
    urlImage: string,
    description: string
  ): Promise<void> {
    await addDoc(collection(this.db, TABLEGAME), {
      title,
      urlImage,
      description,
    });
  }
  //function deleting a game from db
  public async deleteGameById(id: string): Promise<void> {
    await deleteDoc(doc(this.db, TABLEGAME, id));
  }

  //function updating a game
  public async updateGameById(
    id: string,
    title: string,
    urlImage: string,
    description: string
  ): Promise<void> {
    await setDoc(doc(this.db, TABLEGAME, id), { title, urlImage, description });
  }
}
