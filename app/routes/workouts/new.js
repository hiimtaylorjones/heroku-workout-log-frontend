import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { hash } from 'rsvp';


export default class WorkoutsNewRoute extends Route.extend(AuthenticatedRouteMixin) {
  @service store;
  model() {
    let promises = {
      workout: this.get('store').createRecord('workout'),
      movements: this.createMovements()
    };
    return hash(promises);
  }

  createMovements() {
    let startingMovement = this.get('store').createRecord('movement');
    let records = [];
    records.addObject(startingMovement);
    return records;
  }

  setupController(controller, models) {
    controller.set('workout', models.workout);
    controller.set('movements', models.movements);
  }
}
