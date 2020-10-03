import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TutorialService } from './tutorial.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { FileUploadModule } from 'ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    AddTutorialComponent,
    NavBarComponent,
    TutorialDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,
    ReactiveFormsModule,FileUploadModule,NgbModule
  ],
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
