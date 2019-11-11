import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
//@Output() emit1 =new EventEmitter();
page:number =1;
  constructor() { }

  ngOnInit() {
     // this.paginator();
    // console.log(this.page);
  //   this.emit1.emit(this.page);
  }

//   paginator(){
//       console.log(this.page);
//   }
pagination(){
    console.log("hello");
}
}
