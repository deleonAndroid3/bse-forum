import { IFirestoreDocument } from "./firestore-document.model";
import { IUser } from "./user.model";
import { IQuestion } from './question.model';

export interface IWord extends IFirestoreDocument {
  word?: string;
  type?: string; //adj, vern, noun
  definition?: string;
  relatedQuestions?: IQuestion[];
  translationExamples?: {eng: string, jp: string}[];
  author?: IUser;
}