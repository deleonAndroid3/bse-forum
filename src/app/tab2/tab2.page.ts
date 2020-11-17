import { IWord } from './../models/word.model';
import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  page = 0
  words = []

  constructor(private router: Router) {
    this.fetchWords()
  }

  fetchWords(event?: any) {
    let nextPage = this.mock[this.page]
    setTimeout(() => {
      if (nextPage) {
        this.words = this.words.concat(nextPage)
        this.page++
      }

      if (event) {
        event.target.complete()
      }
    }, 1200)
  }

  onClickWord(id) {
    id && this.router.navigate(["word", id]);
  }

  renderHeader(record, recordIndex, records) {
    if (recordIndex === 0) {
      return record.word[0].toUpperCase();
    }

    const previous = records[recordIndex - 1].word[0].toUpperCase();
    const current = record.word[0].toUpperCase();

    if (previous !== current) {
      return current;
    }

    return null;
  }

  mock: IWord[][] = [
    [
      { word: 'Access' },
      { word: 'Active-Matrix' },
      { word: 'Add-on' },
      { word: 'ADSL' },
      { word: 'Adware' },
      { word: 'Affiliate' },
      { word: 'AGP' },
      { word: 'AIFF' },
      { word: 'Analog' },
      { word: 'Android' },
      { word: 'API' },
      { word: 'BASIC' },
      { word: 'Batch File' },
      { word: 'Batch Process' },
      { word: 'Bcc' },
      { word: 'Beta Software' },
      { word: 'Biometrics' },
      { word: 'BIOS' },
    ],
    [
      { word: 'Emoticon' },
      { word: 'Emulation' },
      { word: 'Encryption' },
      { word: 'End User' },
      { word: 'Firewall' },
      { word: 'Firewire' },
      { word: 'Firmware' },
      { word: 'Handle' },
      { word: 'Hibernate' },
      { word: 'Java' },
      { word: 'JavaScript' },
      { word: 'Jumper' },
      { word: 'Leaf' },
      { word: 'Leaflet' },
      { word: 'Migration' },
      { word: 'Meta' },
      { word: 'Metadata' },
      { word: 'Node' },
    ],
  ]
}
