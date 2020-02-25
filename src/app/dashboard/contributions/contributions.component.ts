import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../shared/contributions.service';
import { UserService } from '../shared/user.service';
import { constants } from '../shared/constants';

@Component({
  selector: 'contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {

  individualRankings: String[] = [];
  loggedInUserContribution: any;
  teamRankings: any;
  loggedInUserTeam: any;
  constructor(private contributionsService: ContributionsService, private userService: UserService) { }

  ngOnInit(): void {

    this.contributionsService.getTopIndividualContributors().forEach(topContributor => {
      this.individualRankings.push(this.userService.getUser(topContributor.userId).firstName);
    });
    this.loggedInUserContribution = this.contributionsService.getLoggedInUsersContributionData(constants.loggedInUserId);
    this.teamRankings = this.contributionsService.getTopTeams();
    this.loggedInUserTeam = this.contributionsService.getLoggedInUsersTeam(this.userService.getUser(constants.loggedInUserId).teamId);
  }

}
