import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { Frame15Component } from "./export-result/frame-15/frame-15.component";
import { A4TabsComponent } from "./export-result/a-4-tabs/a-4-tabs.component";
import { IgnoreMeAlsoComponent } from "./export-result/ignore-me-also/ignore-me-also.component";
import { SideToolbarComponent } from "./export-result/side-toolbar/side-toolbar.component";
@NgModule({
  declarations: [
    AppComponent,
    Frame15Component,
    A4TabsComponent,
    IgnoreMeAlsoComponent,
    SideToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
