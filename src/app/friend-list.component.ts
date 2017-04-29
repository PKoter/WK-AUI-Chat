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
    selectedFriend2 : Friend;
    friends : Friend[];

    chattingFriends : Array<Friend>;
    constructor(private friendService : FriendService) {
        this.chattingFriends = new Array<Friend>();
    }

    ngOnInit() : void {
        this.friendService.getFriends().then(friends => this.friends = friends);
        
    }

    onSelect(friend:Friend):void {
        /*if(this.selectedFriend !== friend){
            this.selectedFriend = friend;
        }
        else{
            this.selectedFriend = null;
        }
        */
        let index = this.chattingFriends.indexOf(friend);
        if(index < 0){
            this.chattingFriends.push(friend);
            this.selectedFriend = friend;
        }
        else{
            this.chattingFriends.splice(index, 1);
            
        }
        this.selectedFriend2 = this.friends[4];
    }

}