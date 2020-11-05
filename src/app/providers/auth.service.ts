import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, switchMap } from "rxjs/operators";
import { BehaviorSubject, from, Observable, Subject } from "rxjs";

import { Plugins, registerWebPlugin } from "@capacitor/core";
import { FacebookLogin } from "@capacitor-community/facebook-login";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
const { Storage } = Plugins;

declare var FB: any;
window.fbAsyncInit = function () {
  FB.init({
    appId: "406695353837678",
    cookie: true, // enable cookies to allow the server to access the session
    xfbml: true, // parse social plugins on this page
    version: "v5.0", // use graph api current version
  });
};

// Load the SDK asynchronously
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

const TOKEN_KEY = "my-token";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated = new BehaviorSubject<boolean>(null);
  token = "";

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log("set token: ", token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  // login(credentials: { email; password }): Observable<any> {
  //   return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
  //     map((data: any) => data.token),
  //     switchMap((token) => {
  //       return from(Storage.set({ key: TOKEN_KEY, value: token }));
  //     }),
  //     tap((_) => {
  //       this.isAuthenticated.next(true);
  //     })
  //   );
  // }

  dummyLogin(): Promise<boolean> {
    Storage.set({ key: TOKEN_KEY, value: "my-jwt-token-perhaps?" });
    this.isAuthenticated.next(true);
    return Promise.resolve(true);
  }
  async login(): Promise<boolean> {
    const FACEBOOK_PERMISSIONS = ["email", "public_profile"];

    const result = await Plugins.FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });
    if (result && result.accessToken) {
      console.log("HEY I GOT HERE!" + result.accessToken.token);
      this.isAuthenticated.next(true);
      const credential = firebase.auth.FacebookAuthProvider.credential(
        result.accessToken.token
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(({ additionalUserInfo, user }) => {
          const { providerId } = additionalUserInfo;
          const data = {
            _id: user.uid,
            email: user.email || user.providerData[0].email,
            name: user.displayName,
            avatar: user.photoURL || user.providerData[0].photoURL,
            providerId,
            photo: `https://graph.facebook.com/${user.uid}/picture?height=500`,
          };
          console.log(user.displayName + " HAYS KAKAPOY");
          const usersRef = firebase.firestore().collection("users");
          usersRef
            .doc(user.uid)
            .set(data)
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      this.isAuthenticated.next(false);
    }
    console.log("EXITED HERE");
    return Promise.resolve(true);
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({ key: TOKEN_KEY });
  }
}

registerWebPlugin(FacebookLogin);
