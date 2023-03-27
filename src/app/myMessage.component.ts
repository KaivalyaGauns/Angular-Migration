import * as angular from "angular";

let myMessageComponent = {
  selector: "myMessage", // maps to <my-message> in html
  template: `
    <h1>{{$ctrl.message}}</h1>
  `,
  bindings: {},
  controller: class myMessageController {
    public message: string;
    constructor() {
      this.message = "HELLO WORLD!";
    }
  }
}

angular
  .module("codecraft")
  .component(myMessageComponent.selector, myMessageComponent);
