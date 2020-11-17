import { FirestoreDocument, IFirestoreDocument } from "./firestore-document.model";
import { IWord } from './word.model';
import { IUser } from "./user.model";

export interface IQuestion extends IFirestoreDocument {
  title?: string;
  body?: string;
  views?: number;
  votes?: number;
  comments?: number;
  answers?: number;
  hasCorrectAnswer?: boolean;
  user?: IUser;
  tags?: IWord[];
}

// To show example of inheritance
export class Question extends FirestoreDocument<IQuestion> {


  constructor(question: IQuestion, user?: IUser) {

    if(!user && !question.user) {
      // TODO: get current user.
      user = {};
    }


    const initial: IQuestion = {
      views: 0,
      votes: 0,
      answers: 0,
      comments: 0,
      tags: [],
      hasCorrectAnswer: false,
      ...question,
      user: user || question.user,
    }

    // TODO: populate user with currentUser if not supplied
    super(initial);
  }
}
