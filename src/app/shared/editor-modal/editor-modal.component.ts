import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

// import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as CustomEditor from "src/assets/ckeditor5-custom-build/0.0.1/build/ckeditor";

import { CKEditorConfig } from "../../models/CKEditorConfig";

@Component({
  selector: "app-editor-modal",
  templateUrl: "editor-modal.component.html",
  styleUrls: ["editor-modal.component.scss"],
})
export class EditorModalComponent implements OnInit {
  data: string;
  public Editor = CustomEditor;
  config: CKEditorConfig = {
    placeholder: "Write your answer here.",
    // BUG: Current CKEditor5's generated build does not show the default toolbar as defined in the online builder
    toolbar: [
      "bold",
      "italic",
      "underline",
      "code",
      "|",
      "blockquote",
      "codeblock",
      "bulletedlist",
      "numberedlist",
      "|",
      "link",
      // "image", // BUG: not working
      "|",
    ],
  };

  constructor(public modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss(this.data);
  }

  ngOnInit() {}
}
