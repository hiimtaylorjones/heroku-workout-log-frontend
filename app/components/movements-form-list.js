import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MovementsFormListComponent extends Component {
  @service store;

  @tracked movements;
  @tracked workout;
  @tracked isLoading = false;

  @action addMovement() {
    this.isLoading = true;
    let move = this.movements;
    let newMovement = this.store.createRecord('movement');
    debugger;
    move.addObject(newMovement);
    this.movements = move;
    this.isLoading = false;
  }
}
