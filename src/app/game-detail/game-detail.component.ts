import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  //get the paramId
  paramId: string = this._activatedRoute.snapshot.params['id'];

  //variable stored the result of getGameById from service
  oneGame: Promise<DocumentData | undefined> =
    this._firebaseService.getGameById(this.paramId);

  //function calling deleteGameByid(id) from service and redirect home
  deleteGameById() {
    this._firebaseService
      .deleteGameById(this.paramId)
      .then(() => this._router.navigate(['']));
  }
  ngOnInit(): void {}
}
