import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MovementsFormListComponent extends Component {
  @service store;
  
  @tracked movements;
  @tracked isLoading = false;

  constructor(owner, args) {
    super(owner, args);
    this.movements = this.args.movements;
  }

  

  @action addMovement() {
    this.isLoading = true;
    let move = this.movements;
    let newMovement = this.store.createRecord('movement');
    move.addObject(newMovement);
    this.movements = move;
    this.isLoading = false;
  }
}
