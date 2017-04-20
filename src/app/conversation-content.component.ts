import { Component, Input,  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Friend } from './friend';

@Component({
    selector: 'conversation',
    templateUrl: './web/conversation-content.html',
    styleUrls: ['./web/conversation-content-styles.css']
})

export class ConversationContentComponent {

    defaultCUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/app/mock_data/_conversation-starter.htm');
    defaultPath: string = '/app/mock_data/';
    @Input() friend : Friend;
    targetCURL : string;

    public constructor(private sanitizer : DomSanitizer){
        
    }

    manageCUrl() : SafeResourceUrl{
        var curl : string;
        if(this.friend.conversationLog){
            curl = this.defaultPath + this.friend.name+'.htm';
        }
        else{
            return this.defaultCUrl;
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(curl);
    }
    
}

