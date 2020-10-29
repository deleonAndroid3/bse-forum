import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CKEditorModule,
    TimeagoModule.forChild()
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
