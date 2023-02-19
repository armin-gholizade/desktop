import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicChildLoaderDirective } from './directives/dynamic-child-loader.directive';
import { WindowsComponent } from './windows/windows.component';
interface appInformation {
  appName: string;
  imgSrc:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectWindows';
  clock:any=new Date().toLocaleTimeString()
  date:any=new Date().toLocaleDateString()
  show:boolean=false
  zIndex:BehaviorSubject<any>=new BehaviorSubject('')
  WindowTitle:string=''
   cmp = new Set()
   index:number=0
  obj={myComputer:'This PC',
       chrome:'chrome',
       recycleBin:'recycle bin',
       folder:'folder',
       exportFile:'export file',
       mail:'Mail'
}
oba:appInformation[]=[
    {appName:'This PC',imgSrc:'./assets/img/myComputer.png'},
    {appName:'chrome',imgSrc:'./assets/img/chrome.png'},
    {appName:'recycle bin',imgSrc:'./assets/img/37aunh3iv2spervrespi7467bj-3002148310c55d13ff425c67c23044b9.png'},
    {appName:'folder',imgSrc:'./assets/img/jh7k7hktroklbubdee5gtp6ths-c93fd354f566f2e3a1d1826e3fb985ed.png'},
]
obc:appInformation[]=[
    {appName:'export file',imgSrc:'./assets/img/pngwing.com.png'},
    {appName:'Mail',imgSrc:'./assets/img/mail_blue.png'},
    {appName:'This PC',imgSrc:'./assets/img/myComputer.png'},
    {appName:'chrome',imgSrc:'./assets/img/chrome.png'},
]
@ViewChild(DynamicChildLoaderDirective, { static: true })dynamicChild!: DynamicChildLoaderDirective;

getData(event:any){
  this.add(event)
}


  public add(event:any): void {
    this.index++
     let cmp=this.dynamicChild.viewContainerRef.createComponent(WindowsComponent);
     cmp.instance.WindowTitle=event
     cmp.instance.show=true
     cmp.instance.index=this.index
     cmp.instance.zIndex=this.zIndex
     cmp.instance.emitClose.subscribe(value=>this.destroy(value))
     cmp.instance.emitZindex.subscribe(value=>this.setZindex(value))
     this.cmp.add(cmp)
 }
destroy(index:any){
  for (let entry of this.cmp as any) {
    if(entry.instance.index==index){
      console.log('*-/-*/-*/',entry.instance.index)
      entry.destroy()
    }
}
 }
 setZindex(event:any){
  this.zIndex.next(event)
 }



}
