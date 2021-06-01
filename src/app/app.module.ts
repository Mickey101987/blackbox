import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    BrandsComponent,
    FeaturesComponent,
    AboutComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
