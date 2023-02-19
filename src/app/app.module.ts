import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { TaskbarIconComponent } from './taskbar-icon/taskbar-icon.component';
import { WindowsComponent } from './windows/windows.component';
import { DynamicChildLoaderDirective } from './directives/dynamic-child-loader.directive';
import { FoldersComponent } from './folders/folders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    TaskbarIconComponent,
    WindowsComponent,
    DynamicChildLoaderDirective,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
