import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageThreadComponent } from './componants/message-thread/message-thread.component';
import { MessageInputComponent } from './componants/message-input/message-input.component';
import { MessageComponent } from './componants/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageThreadComponent,
    MessageInputComponent,
    MessageComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [HttpService, UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
