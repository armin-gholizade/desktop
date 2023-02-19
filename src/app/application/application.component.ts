import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface appInformation {
  appName: string;
  imgSrc:string
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  show:boolean=false
  @Input() WindowTitle:string=''
  @Input() curentIcon:string=''
  @Input() obj:appInformation[]=[]
  @Output() emitData=new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }


setCover(event:any){
  if(this.curentIcon==''){
    this.curentIcon=event
  }else if(this.curentIcon==event){
    this.curentIcon=''
    this.emitData.emit(event)
  }else{
    this.curentIcon=event
  }
}

}
