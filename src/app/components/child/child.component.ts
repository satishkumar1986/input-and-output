import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //@Input('pData') pText;

  @Input('pDataObj') child_Obj;

  @Input('pDataObjArr') child_ObjArr;

  @Output() childEvent = new EventEmitter();

  childDataSendtoParent = "Child Data Send to Parent"

  constructor() { }

  ngOnInit(): void {
    //let sendObj = {id:1, name:'sahil'}
    // let sendObj = [
    //   {id:1, name:'sahil'},
    //   {id:2, name:'asha'},
    //   {id:3, name:'jon'},
    // ]
    //this.childEvent.emit(sendObj)
  }

  // change(value){
  //   this.childEvent.emit(value)
  // }

  myObjMethod(){
    let sendObj = [
      {id:1, name:'sahil'},
      {id:2, name:'asha'},
      {id:3, name:'jon'},
    ]
    this.childEvent.emit(sendObj)
  }



  

}
