import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { FRIENDS } from './mock-friends';

@Injectable()
export class FriendService {
    getFriends() : Promise<Friend[]> {
        return Promise.resolve(FRIENDS);
    }

    
}