import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {
  @Input() txt:string=''
  @Input() bind:string=''
  @Output() emitBind=new EventEmitter<string>()
  bindArray:string[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  up(){
    console.log('last : ',this.txt,'bind :',this.bind)
  }
  down(){
    this.emitBind.emit(this.txt)
    console.log('first : ',this.txt)
  }

}
