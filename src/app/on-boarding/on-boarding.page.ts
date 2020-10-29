import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { INTRO_KEY } from '../guards/intro.guard';
const { Storage } = Plugins;


@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  finish() {
    Storage.set({ key: INTRO_KEY, value: 'true'});
    this.router.navigate(['tabs']);
  }

}
