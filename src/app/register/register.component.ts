import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register() {
    const user = { username: this.username, password: this.password };
    this.http.post<any>('http://localhost:8080/api/register', user).subscribe(response => {
      // Handle successful registration response here
      console.log(response);
    }, error => {
      // Handle registration error here
      console.error(error);
    });
  }
  
}