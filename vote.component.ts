import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    template:`
<div>
    <i
        class="glyphicon glyphicon-menu-up"
        [class.highlighted] = "myVote == 1"
        (click)="upButton()">
    </i>

    <span> {{ voteCount + myVote }} </span>

    <i 
         class="glyphicon glyphicon-menu-down"
         [class.highlighted] = "myVote == -1"
         (click)="downButton()">
    </i>
    
</div>
`,
styles: [`
   
    .glyphicon-menu-up {
        
        cursor: pointer;

    }

    .glyphicon-menu-down{
         
        cursor: pointer;

    }

    .highlighted{
        color: orange

    }
    
    
    
    div {
        width: 20px;
        text-align: center;
        color: #999;

    }
`
]
})

export class VoteComponent {

    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upButton(){
         if(this.myVote == 1)
            return;

            this.myVote++;

            this.vote.emit({myVote: this.myVote});

    }

  downButton(){
        if(this.myVote == -1)
            return;

            this.myVote--;

            this.vote.emit({myVote: this.myVote});

  }