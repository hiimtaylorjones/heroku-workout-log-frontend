import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class WorkoutsNewController extends Controller {
  @service store;

  conditionOptions = ["For Time", "Max Reps", "Other"];

  @tracked workout;
  @tracked movements;
  @tracked condition = "For Time";

  
  @action
  selectCondition(newCondition) {
    this.condition = newCondition;
  }

  @action
  saveWorkout() {
    let workout = this.workout;
    workout.save().then((data) => {
      console.log(data);
      console.log('Saved');
    });
  }

}
