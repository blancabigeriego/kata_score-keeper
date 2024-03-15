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

  public scorePoints(index: number): void {
    if (!index || (index !== 1 && index !== 2 && index !== 3)) return;
    this.getScore(index);
  }

  private getScore(points: number): void {
    const [firstPart, secondPart] = this.teamScore.split(":");

    let newSecondPart = parseInt(secondPart) + points;
    let valueOverHundred = 0;

    if (newSecondPart > 999) {
      valueOverHundred = Math.floor(newSecondPart / 1000);
      newSecondPart = newSecondPart % 1000;
    }

    const formattedFirstPart = this.formatScore(
      parseInt(firstPart) + valueOverHundred
    );
    const formattedSecondPart = this.formatScore(newSecondPart);

    this.teamScore = `${formattedFirstPart}:${formattedSecondPart}`;
  }

  private formatScore(score: number): string {
    return score.toString().padStart(3, "0");
  }
}
