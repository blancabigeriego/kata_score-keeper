import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonComponent } from "./button.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the config value", () => {
    component.config = 3;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toEqual("Score 3 !!");
  });
});
