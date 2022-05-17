import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
   student={email:"",password:""}
  constructor(private router: Router) { 
    let register=JSON.parse(localStorage.getItem('student')!)
    console.log(register)
    this.student.email=register.email;
    this.student.password=register.password;

  }
  ngOnInit(): void {
  }

  Logout()
  {
    localStorage.removeItem('student');
    this.router.navigateByUrl('')
    window.alert('Logout Successfully')

  }
}
