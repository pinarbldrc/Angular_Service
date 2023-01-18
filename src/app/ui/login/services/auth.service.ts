import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModule } from '../login.module';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject("apiUrl") private apiUrl:string,
              private httpClient:HttpClient,
              private router:Router
            )
  {}


  login(loginModule:LoginModule){
    let api = this.apiUrl + "users/login";
    this.httpClient.post(api,loginModule).subscribe((res:any)=>{localStorage.setItem("token", res.data.token);
    this.router.navigate(["/"])
   },(err)=>{});


  }

}
