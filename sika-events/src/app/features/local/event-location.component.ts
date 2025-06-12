import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SideToolbarComponent } from '../../shared/components/side-toolbar/side-toolbar.component';
import { A4TabsComponent } from '../../shared/components/a-4-tabs/a-4-tabs.component';
import { CommonModule } from "@angular/common";

@Component({
  selector: "event-location",
  standalone:true,
  imports: [
    CommonModule,
    // SideToolbarComponent,
    // A4TabsComponent,
   
  ],
  templateUrl: "./event-location.component.html",
  styleUrls: ["./event-location.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventLocationComponent {}
