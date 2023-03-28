import "angular";
import "angular-resource";
import "angular-animate";


import "ng-infinite-scroll";
// import "../node_modules/spin.js"
import "angular-spinner";
//import "angular-auto-validate";
import "angular-ladda";
import "angular-strap";
import "angularjs-toaster";
import "angular-ui-router";


import "./app.main";
import "./myMessage.component";
import "./polyfills";

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { myMessageComponent } from "./myMessage.component";
import { appRootComponent } from "./app-root.component";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        myMessageComponent,
        appRootComponent
    ],
    bootstrap: [
        appRootComponent
    ]
})

export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);