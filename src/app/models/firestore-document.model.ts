/**
 * Firebase Document
 */
import { firebase } from "../firebase";
import { v4 as uuidv4 } from 'uuid'

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
    !obj.createdAt && this.TIMESTAMP();
    !obj.id && this.UUIDV4();
  }

  private TIMESTAMP() {
    this._value.createdAt = firebase.firestore.Timestamp.now();
  }

  private UUIDV4() {
    this._value.id = uuidv4();
  }
}


//TODO: generate uuid