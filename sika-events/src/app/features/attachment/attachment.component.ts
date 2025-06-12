import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { UploadFileComponent } from "./upload-file/upload-file.component";
@Component({
  selector: "app-attachment",
  templateUrl: "./attachment.component.html",
  styleUrls: ["./attachment.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachmentComponent {}
