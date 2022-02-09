import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent implements OnInit {
  //constructor
  constructor(
    private _fireBaseService: FirebaseServiceService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  //define a formGroup to getting fields values
  public gameFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    urlImage: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  //function calling addGame(title,urlImage,description) from service
  public addGame(): void {
    this._fireBaseService
      .addGame(
        this.gameFormGroup.get('title')!.value,
        this.gameFormGroup.get('urlImage')!.value,
        this.gameFormGroup.get('description')!.value
      )
      .then(() => this._router.navigate(['']));
  }

  //getting the idParam
  public idParam: string = this.activatedRoute.snapshot.params['id'];

  //function calling updateGame from service
  updateGame() {
    console.log('test');
  }

  ngOnInit(): void {
    if (this.idParam) console.log(this.idParam);
  }
}
