import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    // console.log("Showing all values");  
    // console.log(f.value.name);  
    // console.log(f.value.birthdate);  
    // console.log(f.value.username);  
    // console.log(f.value.email);  
    // console.log(f.value.password);  
    this.authService.postUserInDynamo(
      {
        name: f.value.name,
        userName: f.value.username,
        correo: f.value.email,
        fechaNacimiento: f.value.birthdate,
        password: f.value.password
      }
    ).subscribe((data: any) => console.log(data));
  }


}
