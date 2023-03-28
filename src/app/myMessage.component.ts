import * as angular from "angular";
import { Component } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

@Component({
  selector: "myMessage", // maps to <my-message> in html
  template: `
    <h1>{{message}}</h1>
  `
})
export class myMessageComponent {
  public message: string;
  constructor() {
    this.message = "HELLO WORLD!";
  }
}

