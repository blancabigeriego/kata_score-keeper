import { Component, Input } from "@angular/core";

@Component({
  selector: "app-marker",
  templateUrl: "./marker.component.html",
  styleUrls: ["./marker.component.scss"],
})
export class MarkerComponent {
  @Input() public score: string = "S C O R E";
}
