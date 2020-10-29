import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanLoad {
  constructor(private router: Router) {}

  async canLoad(): Promise<boolean> {
    console.log('testing guard');
    const hasSeenIntro = await Storage.get({ key: INTRO_KEY });
    console.log('test', hasSeenIntro);
    if (hasSeenIntro && hasSeenIntro.value === 'true') {
      return true;
    } else {
      console.log('navigating to on-boarding')
      this.router.navigateByUrl('/on-boarding', { replaceUrl: true });
      return false;
    }
  }
}
