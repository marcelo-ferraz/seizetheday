import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CatmBoardComponent } from './board/catm-board.component';
import {CatmCardComponent} from "./card/catm-card.component";

@NgModule({
  declarations: [
    CatmBoardComponent,
    CatmCardComponent
  ],
  exports: [
    CatmBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [CatmBoardComponent]
})
export class CatmModule { }
