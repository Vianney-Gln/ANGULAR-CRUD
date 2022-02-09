import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent implements OnInit {
  //constructor
  constructor(private _fireBaseService: FirebaseServiceService) {}

  //define a formGroup to getting fields values
  gameFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    urlImage: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  //function calling addGame(title,urlImage,description) from service
  addGame(): void {
    this._fireBaseService.addGame(
      this.gameFormGroup.get('title')?.value,
      this.gameFormGroup.get('urlImage')?.value,
      this.gameFormGroup.get('description')?.value
    );
  }

  ngOnInit(): void {}
}
