import { Component, Input } from "@angular/core";

@Component({
    selector: "app-text-field",
    templateUrl: "./text-field.component.html",
    styleUrls: ["./text-field.component.css"]
})
export class TextFieldComponent {
  public type: string = "Label";
  @Input({required: true}) public label!: string;
}
