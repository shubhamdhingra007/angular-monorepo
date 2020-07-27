import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-auth-auth',
  template: `
    <h1 style="margin-top:200px">
      Login comp works!
    </h1>
    <input type="text" placeholder="Enter email" />
    <input type="password" placeholder="Enter password" />
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
