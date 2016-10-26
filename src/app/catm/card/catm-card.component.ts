import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'catm-card',
  templateUrl: './catm-card.component.html',
  styleUrls: [ './_catm-card.component.scss' ]
})
export class CatmCardComponent {
  @Input('text')
  public text: string;

  @Input('type')
  public type: string = 'white';

  public get isBlack () : boolean {
    return this.type === 'black';
  }

  constructor() {
  }
}
