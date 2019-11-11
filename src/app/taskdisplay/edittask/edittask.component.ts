import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
   id:string ="";
  title: string = "";
  status: string = "";
  constructor(
    private _act: ActivatedRoute,
    private _data: TaskdataService,
    private _router:Router
  ) {}

  ngOnInit() {
    this.id = this._act.snapshot.params["Id"];

    this._data.getTaskById(this.id).subscribe(
      (data: Task[]) => {
        this.title=data[0].Title;
        this.status=data[0].Status;

    });
  }
  onEditTask(f){
      this._data.editTask(f.value).subscribe(
        (data:any)=>{
          alert('updated');
          this._router.navigate(['/task']);
        }
      );
  }
}
