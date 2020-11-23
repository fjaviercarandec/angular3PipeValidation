import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  get email() {
    return this.form.get('email');
  }

  get terms() {
    return this.form.get('terms');
  }

  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required]),
    terms: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
