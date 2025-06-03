import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-ignore-me-also",
  templateUrl: "./ignore-me-also.component.html",
  styleUrls: ["./ignore-me-also.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IgnoreMeAlsoComponent {}
