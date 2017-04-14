import { Component, Input } from '@angular/core';
import { Friend } from './friend';
import { FriendService } from './friend.service';

@Component({
    selector: 'friend-chat-window',
    templateUrl: './web/friend-chat-window.html',
    styleUrls: ['./web/friend-chat-window.styles.css']
})

export class FriendChatWindowComponent {

    @Input() friend : Friend;

}