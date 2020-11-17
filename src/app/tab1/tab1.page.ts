import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { IQuestion } from '../models/question.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public test = 'hot'
  dummyDate = new Date().getTime();
  questions: IQuestion[] = [
    {
      id: '1',
      title: 'What is the difference of the word "interface" from a developer\'s...',
      body: 'Originally, I thought that interface stands for...',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '1',
        name: 'Napoleon Bonapart',
        avatar: null,
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '2',
      title: 'What does "abstract" mean in programming?',
      body: 'Lorem ipsum.',
      votes: -5,
      comments: 3,
      answers: 4,
      user: {
        id: '2',
        name: 'Earl Boykins',
        avatar: 'https://gravatar.com/avatar/dba6ba51111236f123441f5551234a7741?d=identicon&f=y',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '3',
      title: 'Is 移動 an appropriate translation for "migration" in terms of ...',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '2',
        name: 'Earl Boykins',
        avatar: 'https://ionicframework.com/docs/demos/api/list/avatar-rey.png',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '124124',
      title: 'How do I translate "Object" in the context of OOP taxonomy?',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '124124',
        name: 'Earl Boykins',
        avatar: 'https://ionicframework.com/docs/demos/api/list/avatar-ben.png',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '124124',
      title: 'How do you translate "Class" in programming terms?',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '124124',
        name: 'Earl Boykins',
        avatar: 'https://ionicframework.com/docs/demos/api/list/avatar-yoda.png',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '124124',
      title: 'How do you know when to use hiragana or katakana when translating implementation details?',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '124124',
        name: 'Earl Boykins',
        avatar: 'https://gravatar.com/avatar/a1ceba59812236f1b3441f555cffea7741?d=identicon&f=y',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '124124',
      title: 'How do you know when to use hiragana or katakana when translating implementation details?',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '124124',
        name: 'Earl Boykins',
        avatar: 'https://ionicframework.com/docs/demos/api/list/avatar-leia.png',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '124124',
      title: 'How do you know when to use hiragana or katakana when translating implementation details?',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '124124',
        name: 'Earl Boykins',
        avatar: 'https://ionicframework.com/docs/demos/api/list/avatar-leia.png',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '124124',
      title: 'How do you know when to use hiragana or katakana when translating implementation details?',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '124124',
        name: 'Earl Boykins',
        avatar: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png',
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    },
    {
      id: '124124',
      title: 'How do you know when to use hiragana or katakana when translating implementation details?',
      body: 'Lorem ipsum.',
      votes: 45,
      comments: 3,
      answers: 4,
      user: {
        id: '124124',
        name: 'Earl Boykins',
        avatar: null,
        email: 'asd@asd',
        jobTitle: 'sadsad',
      }
    }
  ]

  constructor(private router: Router) {}

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (response.data.totalCount == this.questions.length) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  viewQuestion(event: Object, question) {
    this.router.navigate(['question', question.id]);
  }

}
