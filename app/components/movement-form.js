import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MovementFormComponent extends Component {
  @tracked movement;
  @tracked workout;
  @service store;

  constructor(owner, args) {
    super(owner, args);

    if (this.movement === undefined) {
      this.movement = this.store.createRecord('movement', {workout: this.workout, title: 'Test Me', description: 'Try Me'});
    }
  }

  @action 
  saveMovement() {
    let movement = this.movement;
    movement.save().then((data) => {
      console.log(data);
      console.log('Saved');
    });
  }
}
