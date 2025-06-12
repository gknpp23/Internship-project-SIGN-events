import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SideToolbarComponent } from "../../shared/components/side-toolbar/side-toolbar.component";
import { A4TabsComponent } from "../../shared/components/a-4-tabs/a-4-tabs.component";
import { RadioButtonsComponent } from "../../shared/components/radio-buttons/radio-buttons.component";
@Component({
  selector: "risk-assessment",
  standalone:true,
  imports: [
    CommonModule,
    // SideToolbarComponent,
    // A4TabsComponent,
    //RiskClassificationComponent // Adicionado aqui
    RadioButtonsComponent
],
  templateUrl: "./risk-assessment.component.html",
  styleUrls: ["./risk-assessment.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RiskAssessmentComponent {}
