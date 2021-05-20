import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { OutputchildComponent } from './outputchild/outputchild.component';
import { OutputparentComponent } from './outputparent/outputparent.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent,
    OutputchildComponent,
    OutputparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
