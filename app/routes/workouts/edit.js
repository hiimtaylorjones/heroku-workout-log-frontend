import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkoutsEditRoute extends Route {
  @service store;

  model(params) {
    return this.get('store').findRecord('workout', params.workout_id);
  }
}