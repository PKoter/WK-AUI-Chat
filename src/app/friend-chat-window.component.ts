import { Component, Input } from '@angular/core';
import { Friend } from './friend';

@Component({
    selector: 'friend-chat-window',
    templateUrl: './web/friend-chat-window.html',
    styleUrls: ['./web/friend-chat-window.styles.css']
})

export class FriendChatWindowComponent {

    @Input() friend : Friend;

}