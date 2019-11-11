import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  addtask: FormGroup;

  constructor(private fb: FormBuilder, private _data: TaskdataService) { }

  ngOnInit() {
    this.addtask = this.fb.group({
      Id : new FormControl(null,Validators.required),
      Title : new FormControl(null,Validators.required),
       Status: new FormControl(null,Validators.required)


    });
  }
  onSaveTask() {
    this._data
      .addTask(
        new Task(
          this.addtask.value.Id,
          this.addtask.value.Title,
          this.addtask.value.Status,
        )
      )

      .subscribe((x: any) => {
        alert("record added");
      });

}
  }

