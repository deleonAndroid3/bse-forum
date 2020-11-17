//import { IQuestion } from './../models/Question';
import { EditorModalComponent } from './../shared/editor-modal/editor-modal.component';
import { QuestionService } from "./../providers/question.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { Subscription } from "rxjs";
import { first } from 'rxjs/operators';
// import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: "app-question",
  templateUrl: "./question.page.html",
  styleUrls: ["./question.page.scss"],
})
export class QuestionPage implements OnInit {
  @HostListener("click", ['$event']) onClick(e){
    console.log("User Click using Host Listener", { target: e.target })
  }

  // private subscription: Subscription;
  isLoading = true;
  dummyHtml = `
  <h1>I am h1</h1>
  <p>This is the content. And i am not that long but before anything else, Not long ago a longer version among the longest possible long value to be displayed in a long gibberish this is.</p>
  <h2>This is an h2</h2>
  <img src="https://gravatar.com/avatar/dba6ba5_c566f943241fb9cd9ada7741?d=identicon&f=y"/>
  <p>And the second paragraph to add another example.</p>
  `;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    public modalController: ModalController
  ) // private sanitizer: DomSanitizer
  {
    //TODO: get question from firestore using the id from params
    this.route.params
      .pipe(first())
      .subscribe(({ id }) => {
        if (!id) {
          this.router.navigate(["tab1"]);
        } else {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        }
    });
    //TODO:
    // 1. Update UI when update action snapshot is captured
    // 2. Update UI when delete action snapshot is captured
  }

  ngOnInit() {}

  onInputClick(event) {
    event.target.blur();
    this.presentModal();
  }

  onTagClick(wordId: string) {
    this.router.navigate(["word",wordId])
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EditorModalComponent,
      // cssClass: 'my-custom-class'
    });

    modal.onDidDismiss().then((data)=> {
      console.log('ondid', data);
    })

    return await modal.present();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
