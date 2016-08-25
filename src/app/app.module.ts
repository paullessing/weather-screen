import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [AppComponent],
  imports:      [
    BrowserModule,
    HttpModule
  ],
  bootstrap:    [AppComponent],
})
export class AppModule { }
