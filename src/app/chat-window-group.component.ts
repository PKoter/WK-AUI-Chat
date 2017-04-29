import { Component, Input } from '@angular/core';
import { Friend } from './friend';

@Component({
    selector: 'chat-window-group',
    template: `
        <ul class="chat-grouper">
            <li *ngFor="let friend of chattingWith">
                <friend-chat-window [friend]="friend"></friend-chat-window>
            </li>
        </ul>
    `,
    styleUrls: ['./web/chat-window-group.styles.css']
})

export class ChatWindowGroupComponent {
    count : number;
    @Input() chattingWith : Array<Friend>;
}

