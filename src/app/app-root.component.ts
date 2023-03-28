import * as angular from "angular";
import { Component } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

@Component({
  selector: "app-root", // maps to <app-root> in html
  template: `
    <!-- <h1 ng-controller="myMessage">{{message}}</h1> -->
    <h1> HELLO </h1>
    <myMessage></myMessage>
  `
})
export class appRootComponent {
}
