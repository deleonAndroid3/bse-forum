import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  logout() {
    console.log("logging out");
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Change Profile Photo",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Use Camera",
          icon: "camera-outline",
          handler: () => {
            console.log("camera clicked");
          },
        },
        {
          text: "Select From Library",
          icon: "images-outline",
          handler: () => {
            console.log("Select From Library clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
