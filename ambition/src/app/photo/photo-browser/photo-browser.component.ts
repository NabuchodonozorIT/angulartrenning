import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-browser',
  templateUrl: './photo-browser.component.html',
  styleUrls: ['./photo-browser.component.css']
})
export class PhotoBrowserComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log('##############', formValue);
  }

}
