import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class WorkoutsEditController extends Controller {
  @service store;

  @tracked model;
  
  @action
  updateWorkout() {
    let workout = this.model;
    workout.save().then(console.log("Saved!"));
  }
}
