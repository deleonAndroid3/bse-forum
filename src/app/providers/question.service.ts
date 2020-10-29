import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
  DocumentReference,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { IQuestion, Question } from '../models/Question';

// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  private collectionReference: AngularFirestoreCollection<IQuestion>;
  questions: IQuestion[] = [];

  constructor(private ngFirestore: AngularFirestore) {
    this.subscribeToCollection();
  }

  subscribeToCollection() {
    //TODO: implement pagination and do not subscribe to snapshotchanges. just take(1)
    this.collectionReference.snapshotChanges().subscribe((response) => {
      if (response) {
        this.questions = response.map(
          (documentChangeAction: DocumentChangeAction<IQuestion>) => {
            return {
              id: documentChangeAction.payload.doc.id,
              ...documentChangeAction.payload.doc.data(),
            };
          }
        );
      }
    });
  }

  get(documentId: string): Observable<IQuestion> {
    return this.collectionReference
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((changes) => {
          const data = changes.payload.data();
          const id = changes.payload.id;
          return { id, ...(data as IQuestion) };
        })
      );
  }

  insert(question: IQuestion): Promise<DocumentReference> {
    //TODO: test if effective
    const q = new Question(question);
    return this.collectionReference.add(q.value);
  }

  update(question: IQuestion): Promise<void> {
    return this.collectionReference.doc(question.id).update(question);
  }

  delete(documentId: string): Promise<void> {
    return this.collectionReference.doc(documentId).delete();
  }
}
