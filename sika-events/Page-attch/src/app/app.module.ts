import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { Frame17Component } from "./export-result/frame-17/frame-17.component";
import { A4TabsComponent } from "./export-result/a-4-tabs/a-4-tabs.component";
import { IgnoreMeAlsoComponent } from "./export-result/ignore-me-also/ignore-me-also.component";
import { UploadFileComponent } from "./export-result/upload-file/upload-file.component";
import { AttachmentComponent } from "./export-result/attachment/attachment.component";
@NgModule({
  declarations: [
    AppComponent,
    Frame17Component,
    A4TabsComponent,
    IgnoreMeAlsoComponent,
    UploadFileComponent,
    AttachmentComponent,
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
