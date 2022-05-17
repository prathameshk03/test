import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(myform:NgForm){
    console.log(myform)
    localStorage.setItem('student',JSON.stringify(myform))
    this.router.navigateByUrl('/display')
  }
}
