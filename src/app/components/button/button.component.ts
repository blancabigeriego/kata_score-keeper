import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() public config: number = 0;
  public colors: string[] = ["fondo1", "fondo2", "fondo3", "fondo4"];
}
