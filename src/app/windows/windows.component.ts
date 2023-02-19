import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {
  @Input() show:boolean=false
  @Input() index:number=0
  @Input() WindowTitle:string=''
  bind:string=''
  @Input() zIndex:BehaviorSubject<any>=new BehaviorSubject('')
  finalZindex:any
  @Output() emitClose= new EventEmitter<number>()
  @Output() emitZindex= new EventEmitter<any>()
  x:any
  count:number=-1
  list:any[]=[
    {name:'a'},
    {name:'b'},
    {name:'c'},
    {name:'d'},

  ]
  constructor() { 
    // document.getElementById('dass')?.addEventListener(('click'),(e)=>{
    //   // document.getElementById('dass')?.style.background

    // })
  }
  
  ngOnInit(): void {
    this.postionTop(this.index)

  }
  move(event:any){
    // const result = document.getElementById("dass")! as HTMLElement;
    // let x=event.offsetX
    // let y=event.offsetY
    // let z=x-this.x
    // console.log(x,"********",y)
    // // const result = document.getElementById("dass")! as HTMLElement;
    // // result.style.transform='translateX('+x+'px)'
    // result.style.width=z+'px'

  }
clDown(event:any){
this.count++
const app = document.getElementById("box");
const p = document.createElement("div");
p.classList.add('a')
app?.appendChild(p);
const boxes = Array.from(
  document.getElementsByClassName('a') as HTMLCollectionOf<HTMLElement>,
);

let x=event.offsetX
let y=event.offsetY
this.x=x
console.log('first x :',x,"+","first y : ",y)
p.style.cssText=`
    position: absolute;
    width:10px;
    height:10px;
    background:red;
    top:${y}px;
    left:${x}px;
` 
app?.addEventListener('mouseup',(e)=>{
  let x=e.offsetX
  let h=(e.offsetY)-y
  let w=x-this.x;
  let z=Math.atan(h/x)
  console.log('last x :',x,"+","last y : ",h,"+","last width",w,'deg',z)
  console.log(this.count)
  if(boxes[this.count]!=null){
    boxes[this.count].style.width=`${w}px` 
    boxes[this.count].style.transform=`rotate(${z}deg)` 
  }
  
})



  //  let x=event.clientX
  //  let div=document.createElement('div')

  //  let x=event.offsetX
  //  this.x=x
  //  let y=event.offsetY
  // const wd=document.getElementById('window')! as HTMLElement;
  // wd.appendChild(x)
  //   console.log(x,"********",y)
  //   // wd.style.background='red'
  //   const result = document.getElementById("dass")! as HTMLElement;
  //   // result.style.background = "black";
  //   result.style.transform='translateX('+x+'px)'
  //   result.addEventListener('mousedown',(event)=>{
  //      console.log("Offset-Height = " + result.offsetLeft  + "px" + "<br>" + "Offset-Width = " + result.offsetTop  + "px")

  //   })
  }


  getData(event:string){
    this.bind=event
  }
  close(){
    this.emitClose.emit(this.index)
  }
  postionTop(index:number){
    this.emitZindex.emit(index)
    this.zIndex.subscribe(value=>{
      this.finalZindex=value
    })
  }
}
