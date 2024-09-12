import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrl: './login-status.component.css'
})
export class LoginStatusComponent implements OnInit{

  isAuthenticated: boolean = false;
  userFullName: string = '';

  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthStateService,
              @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
              private router : Router
  ) {}

  ngOnInit(): void {
    // Subscrive to authentication state changes
    // this.oktaAuthService.authState$.subscribe(
    //   (result) => {
    //     this.isAuthenticated = result.isAuthenticated!;
    //     this.getUserDetails();
    //   }
    // );
  }

  getUserDetails() {
    if(this.isAuthenticated){
      // this.oktaAuth.getUser().then(
      //   (res) => {
      //     this.userFullName = res.name as string;
      //   }
      // )

      this.storage.setItem('userEmail','john.doe@luv2code.com');

    }
  }

  logout(){
    //Terminate session with okta and remove tokens
    // this.oktaAuth.signOut();
    alert("Good bye champ :(");
    this.isAuthenticated = false;
    this.router.navigate(['/products']);
  }

  login(){
    alert("Welcome back champ :)");
    this.isAuthenticated = true;
    this.getUserDetails();
    this.router.navigate(['/products']);
  }

  navigateToMembers() {
    // Navigate to /members with isAuthenticated as a query parameter
    this.router.navigate(['/members'], { queryParams: { isAuthenticated: this.isAuthenticated } });
  }

  navigateToOrderHistory(){
    this.router.navigate(['/order-history'], { queryParams: { isAuthenticated: this.isAuthenticated } });
  }
}
