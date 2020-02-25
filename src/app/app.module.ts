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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


import { UserService } from './dashboard/shared/user.service'
import { ContributionsService } from './dashboard/shared/contributions.service'

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
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [MatSliderModule],
  providers: [UserService, ContributionsService],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
