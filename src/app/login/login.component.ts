import { loginService }        from './login.Service';
import { Component, OnInit }   from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login.component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userName;
  passWord;
  constructor(private loginService:loginService,private router:Router) { 
    this.userName = "admin";
    this.passWord = 123456;
    this.login;
  }

  login():void{
    // this.loginService.login(this.userName,this.passWord).subscribe(res=>{
    //   window.sessionStorage.setItem("loginData",JSON.stringify(res.data));
    // })
    	this.router.navigateByUrl("app");
  }

  ngOnInit() {
  }

}