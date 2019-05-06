import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {UploadComponent} from './ng2-file-upload/upload.component';

/**------primeng module -----**/
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule, TableModule],
  declarations: [AppComponent, UploadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
