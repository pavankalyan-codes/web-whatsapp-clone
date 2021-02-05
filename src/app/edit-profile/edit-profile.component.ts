import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  profileName: string = '';
  iconInInput = 'mode';
  iconInInput1 = 'mode';

  constructor() {
    this.profileName = 'Pakalu Papito';
  }

  changeIcon() {
    this.iconInInput = this.iconInInput == 'mode' ? 'check' : 'mode';
  }

  changeIconAbout() {
    this.iconInInput1 = this.iconInInput1 == 'mode' ? 'check' : 'mode';
  }

  ngOnInit(): void {}
}
