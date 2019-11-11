import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TaskdataService } from './taskdata.service';
import { Task } from './task';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
  arr: Task[] = [];
  name: string = "";


  constructor(private _data: TaskdataService,private _router: Router) {}

  ngOnInit() {
      this._data.getAllTasks().subscribe(
      (data: Task[]) => {
        this.arr = data;

      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  onTaskDelete(item: Task) {
    this._data.deleteTask(item.Id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
      alert('deleted');
    });
  }
  onTaskEdit(item:Task){
    this._router.navigate(['/edittask',item.Id]);
  }

  search(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
    } else {
      this._data.getAllTasks().subscribe(
        (data: Task[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
  onEditTaskReactive(item: Task){
    this._router.navigate(['/edittaskreactive',item.Id]);
  }


  }
