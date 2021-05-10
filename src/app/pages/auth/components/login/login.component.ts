import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value.email);
    console.log(f.value.password);

    this.authService.getUsers().subscribe((data: any) => data['data']['Items'].forEach(element => {
      if (element['correo'] === f.value.email && element['password'] == f.value.password) {
        this.toastr.success("Inicio de sesión correcto!", "Exito", { timeOut: 3000 });
        this.router.navigate(['/home']);
        localStorage.setItem('username', element['userName']);
      }
    }));

  }

}
