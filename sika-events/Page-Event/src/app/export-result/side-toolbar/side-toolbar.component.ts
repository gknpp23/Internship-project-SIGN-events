import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-side-toolbar",
  templateUrl: "./side-toolbar.component.html",
  styleUrls: ["./side-toolbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideToolbarComponent {
  @Input() state: "Resting" | "Active" = "Active";
  @Input() size: "Default" | "Small" = "Small";
}
