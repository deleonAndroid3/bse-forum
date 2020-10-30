import { IFirestoreDocument } from "./firestore-document.model";

export interface IUser extends IFirestoreDocument {
  name?: string;
  avatar?: string;
  email?: string;
  jobTitle?: string;
}
