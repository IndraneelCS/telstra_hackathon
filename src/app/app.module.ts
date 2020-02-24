import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NewsfeedComponent } from './dashboard/newsfeed/newsfeed.component';
import { VirtualAgentComponent } from './dashboard/virtual-agent/virtual-agent.component';
import { ImprovementHubComponent } from './dashboard/improvement-hub/improvement-hub.component';
import { ContributionsComponent } from './dashboard/contributions/contributions.component';
import { TopProcessesComponent } from './dashboard/top-processes/top-processes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    NewsfeedComponent,
    VirtualAgentComponent,
    ImprovementHubComponent,
    ContributionsComponent,
    TopProcessesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  exports: [MatSliderModule],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
