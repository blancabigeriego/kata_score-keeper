import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MarkerComponent } from "./marker.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("MarkerComponent", () => {
  let component: MarkerComponent;
  let fixture: ComponentFixture<MarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render the score", () => {
    component.score = "000:003";
    fixture.detectChanges();
    const markerElement = fixture.nativeElement.querySelector(".border");
    expect(markerElement.textContent).toEqual("000:003");
  });
});
