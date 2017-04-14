import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FriendListComponent } from './friend-list.component';
import { FriendService }  from './friend.service';
import { FriendChatWindowComponent } from './friend-chat-window.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FriendListComponent, FriendChatWindowComponent ],
  providers:    [ FriendService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
