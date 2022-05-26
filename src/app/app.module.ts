import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './modules/headline/headline.component';
import { ContentComponent } from './modules/content/content.component';
import { CostumersComponent } from './modules/costumers/costumers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    ContentComponent,
    CostumersComponent
  ],
  imports: [
    BrowserModule, CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
