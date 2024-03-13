import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "kata-score-keeper";
  public numberOfTeams: number[] = [1, 2];
  public teamColors = ["red", "blue", "green"];
}
