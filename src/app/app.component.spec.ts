import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should initialize title, numberOfTeams, and teamColors correctly", () => {
    expect(component.title).toBe("kata-score-keeper");
    expect(component.numberOfTeams).toEqual([1, 2]);
    expect(component.teamColors).toEqual(["red", "blue", "green"]);
  });

  it("should render app-team component for each team", () => {
    const teamElements: NodeListOf<Element> =
      fixture.nativeElement.querySelectorAll(".teams-container app-team");
    expect(teamElements.length).toBe(component.numberOfTeams.length);
  });
});
