import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public productTypeOthers: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public enableOthers(value:any) {
    this.productTypeOthers = (value == 6) ? true : false;
  }
  // this.productType = document.getElementById('productTypes');
  // console.log("cal",productType);
  // let

}
