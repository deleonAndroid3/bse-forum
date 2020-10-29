/**
 * Firebase Document
 */
import { timestamp } from 'rxjs/operators';
import { firebase } from "../firebase";

export interface IFirestoreDocument {
  id?: string;
  createdAt?: firebase.firestore.Timestamp;
}

export interface BaseDocument<TModel extends IFirestoreDocument> {
  value: TModel;
}

export class FirestoreDocument<TDocument extends IFirestoreDocument> implements BaseDocument<TDocument> {
  private _value: TDocument;

  get value(): TDocument {
    return this._value
  }

  //Why no setter? This is only to show example of immutable property during the demo.

  constructor(obj: TDocument) {
    this._value = obj;
    !obj.createdAt && this.TIMESTAMP()
  }

  private TIMESTAMP() {
    this._value.createdAt = firebase.firestore.Timestamp.now();
  }
}


//TODO: generate uuid