import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TDformComponent implements OnInit {

  @ViewChild('f',{static:true}) form!:NgForm

  constructor() { }

  submit(){
    console.log(this.form)
  }

  ngOnInit(): void {
  }

}
