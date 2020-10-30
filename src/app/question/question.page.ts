import { IQuestion } from './../models/Question';
import { QuestionService } from "./../providers/question.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Question } from '../models/question.model';

@Component({
  selector: "app-question",
  templateUrl: "./question.page.html",
  styleUrls: ["./question.page.scss"],
})
export class QuestionPage implements OnInit {
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {
    //TODO: get question from firestore using the id from params
    this.subscription = this.route.params.subscribe(({ id }) =>
      console.log(id)
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
