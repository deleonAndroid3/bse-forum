import { NgModule } from "@angular/core";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { IonicModule } from "@ionic/angular";

import { EditorModalComponent } from "./editor-modal/editor-modal.component";

@NgModule({
  imports: [CKEditorModule, IonicModule],
  exports: [CKEditorModule, EditorModalComponent],
  declarations: [EditorModalComponent],
})
export class SharedModule {}
