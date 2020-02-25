import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  constructor() { }

  getTopIndividualContributors() {
    return individualRankings;
  }

  getLoggedInUsersContributionData(userId: number) {
    return individualRankings.find(user => user.userId === userId);
  }

  getTopTeams(){
    return teamRankings;
  }

  getLoggedInUsersTeam(teamId: number){
    return teamRankings.find(team => team.id === teamId);
  }
}


const individualRankings = [
  
  {
    rank: 1,
    userId: 1
  },
  {
    rank: 2,
    userId: 2
  },
  {
    rank: 3,
    userId: 3
  },
  {
    rank: 4,
    userId: 4
  },
  {
    rank: 5,
    userId: 5
  }
]

const teamRankings = [
  {
    id: 1,
    name: 'Super Kings',
    rank: 1,
    members: [1]
  },
  {
    id: 2,
    name: 'Warriors',
    rank: 2,
    members: [2]
  },
  {
    id: 3,
    name: 'Mumbai Indians',
    rank: 3,
    members: [3]
  },
  {
    id: 4,
    name: 'Royal Challengers',
    rank: 4,
    members: [4]
  },
  {
    id: 5,
    name: 'Mavericks',
    rank: 5,
    members: [5]
  }
] 