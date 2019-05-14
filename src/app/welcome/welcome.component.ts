import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from './welcome.service';
import { UserResponse } from './user.response';
import { UserDTO } from './user.dto';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles:[`
  
    a{
      cursor:pointer;
    }

  `]
})
export class WelcomeComponent implements OnInit {

  user: UserDTO;
  state:string = 'home';
  nestWelcome:string;

  constructor(router: Router, private welcomeService: WelcomeService) { }

  ngOnInit() {}

  getUser(){
    this.welcomeService.getUser().subscribe((userRes:UserResponse) => {
      this.user = userRes.data;
      this.state = 'reqres';
    });
  }

  getWelcomeFromNestAPI(){
    this.state = 'nest';
    this.welcomeService.getWelcomeFromNestAPI().subscribe(
      (response : any) => {
        debugger;
        this.nestWelcome = response;
      },
      (error) => {
        this.nestWelcome = '[ERROR] - Cannot get response from nest server';
        console.log(error);
      }
    );

  }

}