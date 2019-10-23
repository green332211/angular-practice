import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  userList = [
    {
      icon: 'feature1.png',
      title: 'Easily Customised',
      text: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      icon: 'feature2.png',
      title: 'Easily Customised',
      text: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      icon: 'feature3.png',
      title: 'Easily Customised',
      text: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      icon: 'feature4.png',
      title: 'Easily Customised',
      text: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      icon: 'feature5.png',
      title: 'Easily Customised',
      text: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      icon: 'feature6.png',
      title: 'Easily Customised',
      text: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    }
  ];

  employeeList = [
    {
      photo: 'team1.jpg',
      name: 'Vasya',
      profession: 'Sucker',
      description: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      photo: 'team2.jpg',
      name: 'Vasya',
      profession: 'Sucker',
      description: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      photo: 'team3.jpg',
      name: 'Vasya',
      profession: 'Sucker',
      description: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    },
    {
      photo: 'team4.jpg',
      name: 'Vasya',
      profession: 'Sucker',
      description: `
        Cras justo odio, dapibus ac fa cilisis in, egestas eget quam. Nullam
        quisrisus eget urna mollis ornare vel eu leo.
      `
    }
  ];

  worksList = [
    {
      photo: 'work1.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
    {
      photo: 'work2.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
    {
      photo: 'work3.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
    {
      photo: 'work4.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
    {
      photo: 'work5.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
    {
      photo: 'work6.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
    {
      photo: 'work7.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
    {
      photo: 'work8.jpg',
      content: '',
      title: 'Project Name',
      text: 'User Interface Design',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
