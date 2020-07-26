import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  //inputVal;

  childObj;

  childObjArr;

  parentStr;

  constructor() { }

  ngOnInit(): void {

    this.childObj = { id: 1, name: 'satish', phone: '9910465505' };

    this.childObjArr = [
      { id: 1, name: 'satish', phone: '9910465505' },
      { id: 2, name: 'sahil', phone: '9717807606' }
    ]

  }

  // change(value){
  //   this.inputVal = value
  // }

  parentString(value){
    this.parentStr = value
  }

}
