import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './modules/headline/headline.component';
import { ContentComponent } from './modules/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
