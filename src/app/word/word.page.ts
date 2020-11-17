import { IWord } from './../models/word.model';
import { IQuestion } from './../models/question.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from 'rxjs/operators';

@Component({
  selector: "app-word",
  templateUrl: "./word.page.html",
  styleUrls: ["./word.page.scss"],
})
export class WordPage implements OnInit {
  isLoading = true;
  relatedQuestions: IQuestion[] = [];
  word: IWord;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params
      .pipe(first())
      .subscribe(({id}) => {
        if (!id) {
          this.router.navigate(["tab2"]);
        } else {
          setTimeout(() => {
            // mock
            this.isLoading = false;
            this.word = {
              definition: '<p>Donec magna odio, semper ac nibh et, vestibulum eleifend felis. Donec pulvinar ex non quam vulputate malesuada in a magna. Praesent massa arcu, vehicula id pharetra et, cursus at lectus.</p>',
              word: 'Aggregate',
              type: 'verb',
              translationExamples: [
                {
                  eng: 'Hello world bla bla aggregate!',
                  jp: 'こんにちは世界の意味不明な集合体！'
                },
                {
                  eng: 'Cloud Firestore does not support native aggregation queries.',
                  jp: 'クラウドファイヤーストア ネイティブ集計クエリはサポートされていません。'
                }
              ],
              relatedQuestions: [
                {
                  id: '123',
                  title: 'What does Aggregate mean in database?'
                },
                {
                  id: '123456',
                  title: 'Can I replace the word "Aggregate" with "Join" (交わる)?'
                }
              ]
            }
          }, 500);
        }
      })
  }

  ngOnInit() {}

  onClickQuestion(id) {
    this.router.navigate(['question', id]);
  }
}
