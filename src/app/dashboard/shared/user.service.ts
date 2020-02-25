import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return data;
  }

  getUser(id: number) {
    return data.find(user => user.id === id);
  }

}

const data = [

  {
    id: 1,
    firstName: 'Indraneel',
    lastName: 'CS',
    role: 'Developer',
    department: 'Information Technology',
    businessGroup: 'Shared Services',
    teamId: 1,
    location: {
      address: 'Accenture Innovation Hub',
      city: 'Bangalore',
      country: 'India'
    },
    preferences: {
      avatar: 'default'
    },
    rewards: ['top-performer', 'advanced'],
    contributionRank: 1
  },
  {
    id: 2,
    firstName: 'Chris',
    lastName: 'Mazurek',
    role: 'Assoc Director',
    department: 'Information Technology',
    businessGroup: 'Shared Services',
    teamId: 2,
    location: {
      address: 'Accenture Liquid Studios',
      city: 'Melbourne',
      country: 'Australia'
    },
    preferences: {
      avatar: 'user2'
    },
    rewards: ['advanced-expert', 'advanced-best'],
    contributionRank: 2
  },
  {
    id: 3,
    firstName: 'Sowmya',
    lastName: 'Kurella',
    role: 'Process Innovation Lead',
    department: 'Process Management',
    businessGroup: 'Shared Services',
    teamId: 3,
    location: {
      address: 'Telstra India ICC',
      city: 'Bangalore',
      country: 'India'
    },
    preferences: {
      avatar: 'female1'
    },
    rewards: ['advanced-best'],
    contributionRank: 3
  },
  {
    id: 4,
    firstName: 'Ryan',
    lastName: 'Stephenson',
    role: 'Senior Manager',
    department: 'Information Technology',
    businessGroup: 'Shared Services',
    teamId: 4,
    location: {
      address: 'Accenture Liquid Studios',
      city: 'Melbourne',
      country: 'Australia'
    },
    preferences: {
      avatar: 'default'
    },
    rewards: ['advanced-best'],
    contributionRank: 4
  },
  {
    id: 5,
    firstName: 'Cissy',
    lastName: 'Zhou',
    role: 'Arch Manager',
    department: 'Information Technology',
    businessGroup: 'Shared Services',
    teamId: 5,
    location: {
      address: 'Accenture Liquid Studios',
      city: 'Melbourne',
      country: 'Australia'
    },
    preferences: {
      avatar: 'female2'
    },
    rewards: ['advanced-best'],
    contributionRank: 5
  }
];