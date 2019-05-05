import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

/**------primeng module -----**/
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule, TableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
