import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class WorkoutsEditRoute extends Route.extend(AuthenticatedRouteMixin) {
  @service store;

  model(params) {
    return this.get('store').findRecord('workout', params.workout_id);
  }
}