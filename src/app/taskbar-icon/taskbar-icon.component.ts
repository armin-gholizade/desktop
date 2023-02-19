import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface appInformation {
  appName: string;
  imgSrc:string
}
@Component({
  selector: 'app-taskbar-icon',
  templateUrl: './taskbar-icon.component.html',
  styleUrls: ['./taskbar-icon.component.scss']
})
export class TaskbarIconComponent implements OnInit {
  @Input() WindowTitle:string=''
  @Input() obj:appInformation[]=[]
  @Output() emitData=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  setData(event:any){
    this.emitData.emit(event)
    }
}
