import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { TeamComponent } from "./components/team/team.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MarkerComponent } from "./components/marker/marker.component";

@NgModule({
  declarations: [AppComponent, TeamComponent, ButtonComponent, MarkerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
