import { Component, OnInit } from '@angular/core';
import { DocumentData } from 'firebase/firestore/lite';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss']
})
export class ListGameComponent implements OnInit {

  constructor(private _firebaseService:FirebaseServiceService) { }

  //call service function getAllGames() and stored in listGames;
  public listGames:Promise<{data: DocumentData;id: string;}[]> = this._firebaseService.getAllGames()

  ngOnInit(): void {
  }

}
