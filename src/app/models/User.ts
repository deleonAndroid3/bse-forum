import { IFirestoreDocument } from "./FirestoreDocument";

export interface User extends IFirestoreDocument {
  name?: string;
  avatar?: string;
  email?: string;
  jobTitle?: string;
}
