import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  currentTab = 'bookmarks';
  constructor(
    private router: Router) {}

  viewSettings() {
    this.router.navigate(['settings']);
  }

  onClickTab(name) {
    this.currentTab = name;

    //fetch logic
  }
}
