import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialoglocation',
  templateUrl: './dialoglocation.component.html',
  styleUrls: ['./dialoglocation.component.scss']
})
export class DialoglocationComponent implements OnInit {

  locationaddForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.locationaddForm = this.fb.group({
      locationname: ['', Validators.required],
      nickname: ['', Validators.required],
      perches: ['', Validators.required],
      amount: ['', Validators.required],
  })
}
}
