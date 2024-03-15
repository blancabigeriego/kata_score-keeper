import { Component, Input } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent {
  @Input() teamName: number = 0;
  public numberOfButtonsAndPoints: number[] = [1, 2, 3];
  public teamScore: string = "000:000";
}
