import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore/lite';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  //construtor
  constructor(
    private _firebaseService: FirebaseServiceService,
    private _activatedRoute: ActivatedRoute
  ) {}

  //get the paramsId
  paramId: string = this._activatedRoute.snapshot.params['id'];

  //variable stored the result of getGameById from service
  oneGame: Promise<DocumentData | undefined> =
    this._firebaseService.getGameById(this.paramId);

  ngOnInit(): void {}
}
