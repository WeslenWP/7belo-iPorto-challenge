import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './modules/headline/headline.component';
import { ContentComponent } from './modules/content/content.component';
import { CostumersComponent } from './modules/costumers/costumers.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    ContentComponent,
    CostumersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, CoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
