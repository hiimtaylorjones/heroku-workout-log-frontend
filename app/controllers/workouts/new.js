import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class WorkoutsNewController extends Controller {
  @service store;

  conditionOptions = ["For Time", "Max Reps", "Other"];

  @tracked model;
  @tracked condition = "For Time";

  @action
  selectCondition(newCondition) {
    this.condition = newCondition;
  }

  @action
  saveWorkout() {
    let workout = this.model;
    workout.save().then((data) => {
      console.log(data);
      console.log('Saved');
    });
  }

}
