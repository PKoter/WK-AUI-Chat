import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { FriendService } from './friend.service';

@Component({
    selector: 'friend-list',
    templateUrl: './web/friend-list.html',
    styleUrls: ['./web/friend-list.styles.css']
})

export class FriendListComponent implements OnInit {

    defaultAvatarPath : string = '/app/mock_data/_defaultavatar.jpg';
    selectedFriend : Friend;
    friends : Friend[];
    constructor(private friendService : FriendService) {}

    ngOnInit() : void {
        this.friendService.getFriends().then(friends => this.friends = friends);
    }

    onSelect(friend:Friend):void {
        if(this.selectedFriend !== friend){
            this.selectedFriend = friend;
        }
        else{
            this.selectedFriend = null;
        }
    }

}