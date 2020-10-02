import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class MovementModel extends Model {
  @hasMany('unit') units;
  @belongsTo('workout') workout;
  
  @attr('string') title;
  @attr('string') description;
}
