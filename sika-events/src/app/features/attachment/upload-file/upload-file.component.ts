import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AttachmentComponent } from "../attachment.component";
@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  standalone:true,
  imports: [AttachmentComponent],
  styleUrls: ["./upload-file.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFileComponent {}
