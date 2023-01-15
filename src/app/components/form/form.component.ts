import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
re=new FormGroup({

userName:new FormControl(''),
password:new FormControl(''),
confirmPassword:new FormControl(""),
});
  constructor() { }

  ngOnInit(): void {
  }

}
