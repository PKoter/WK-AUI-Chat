import { Component, Input } from '@angular/core';
import { Friend } from './friend';

@Component({
    selector: 'friend-chat-window',
    templateUrl: './web/friend-chat-window.html',
    styleUrls: ['./web/friend-chat-window.styles.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css']
})

export class FriendChatWindowComponent {

    minimized : boolean = false;
    minimizeSymbol : string = '&dArr;';
    @Input() friend : Friend;

    onClose(){
        this.friend = null;
    }

    onMinimize(){
        if(this.minimized == false){
            this.minimized = true;
            this.minimizeSymbol = '&uArr;';
        }
        else{
            this.minimizeSymbol = '&dArr;';
            this.minimized = false;
        }
    }
}