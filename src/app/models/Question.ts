import { inherits } from "util";
import { FirestoreDocument, IFirestoreDocument } from "./FirestoreDocument";
import { User } from "./User";

export interface IQuestion extends IFirestoreDocument {
  title?: string;
  body?: string;
  views?: number;
  votes?: number;
  comments?: number;
  answers?: number;
  hasCorrectAnswer?: boolean;
  user?: User;
}

// To show example of inheritance
export class Question extends FirestoreDocument<IQuestion> {
  constructor(question: IQuestion) {

    //Set default values
    question.views = question.views  || 0;
    question.votes = question.votes || 0;
    question.hasCorrectAnswer = question.hasCorrectAnswer || false;
    question.answers = question.answers || 0;
    question.comments = question.comments || 0;

    // TODO: populate user with currentUser if not supplied

    super(question);
  }
}
