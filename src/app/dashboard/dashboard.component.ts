import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { UserService } from '../core/services/user.service';

type entry = {
  API: string;
  Description: string;
  Auth: string,
  HTTPS: boolean,
  Cors: string
  Link: string
  Category: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  entries!:entry[];



  constructor(
    public router:Router,
    public userSer:UserService,
  ) {
    
  }

  ngOnInit(): void {
    this.getEntry();
  }

  getEntry(): void {
    this.userSer.getEntries().subscribe(res => {
        
    });
  }
 
}
