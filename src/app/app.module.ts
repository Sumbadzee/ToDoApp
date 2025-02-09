import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Ensure this is a standalone component
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { CardComponent } from './shared/card/card.component'; 

@NgModule({
  imports: [
    BrowserModule,
    AppComponent, 
    HeaderComponent 
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    CardComponent
  ]
})
export class AppModule { }