import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { CardType } from './CardType'
@Component({
  selector: 'catm-card',
  templateUrl: './catm-card.component.html',
  styleUrls: [ './_catm-card.component.scss' ]
})
export class CatmCardComponent {
  @Input('text')
  public text: string;

  @Input('type')
  public type: CardType = CardType.Black;

  public cardClassType : string;

  constructor() {
    this.cardClassType = this.type === CardType.Black ? 'black' : 'white';
  }
}
