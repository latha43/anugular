﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent }  from './test.component';
import { ListComponent }  from './list';
import { SearchComponent }  from './search';
import { DeleteComponent }  from './delete';
import { AddUpComponent }  from './addup';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './control-messages.component';


@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(routing),FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent,TestComponent,ListComponent,SearchComponent,AddUpComponent,DeleteComponent,ControlMessagesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
