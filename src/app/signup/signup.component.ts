import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup

  constructor(private FormBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.FormBuilder.group({
      fullname:['',Validators.required,],
      surname:['',Validators.required,],
      email:['', Validators.required, Validators.email],
      password:['',Validators.required,  ],
      
    })
  }
    signUp(){
      this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value).subscribe(res=>{
        alert("Iscrizione Effettuata");
        this.signupForm.reset();
        this.router.navigate(['login'])
      }, err=>{
        alert("qualcosa è andato storto")
      })

    }
  

}
