import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrService } from "./services/toastr.service";
import { RiddleService } from "./services/riddle.service";

import { AppComponent } from './app.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { AnswerSelectorComponent } from './components/answer-selector/answer-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GameContainerComponent,
    ImageViewerComponent,
    AnswerSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [RiddleService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }