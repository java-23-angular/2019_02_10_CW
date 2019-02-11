import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const appRouters: Routes = [
  {path:'',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
