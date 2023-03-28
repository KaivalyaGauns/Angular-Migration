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