import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamComponent } from "./team.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("TeamComponent", () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should initialize team score, name, and number of buttons and points correctly", () => {
    expect(component.teamScore).toBe("000:000");
    expect(component.teamName).toBe(0);
    expect(component.numberOfButtonsAndPoints).toEqual([1, 2, 3]);
  });
  it("should increment team score correctly when valid index is provided", () => {
    component.teamScore = "001:000";
    component.scorePoints(2);
    expect(component.teamScore).toBe("001:002");
  });
  it("should format score correctly", () => {
    expect((component as any).formatScore(5)).toBe("005");
    expect((component as any).formatScore(100)).toBe("100");
    expect((component as any).formatScore(999)).toBe("999");
  });
});
