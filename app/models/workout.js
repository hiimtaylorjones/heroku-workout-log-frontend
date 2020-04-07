import Model, { attr, hasMany } from '@ember-data/model';
export default class WorkoutModel extends Model {
  // Primative Data Attributes
  @attr('string') title;
  @attr('string') classification;
  @attr('string') condition;
  @attr('string') notes;
  @attr('date') createdAt;
  @attr('date') updatedAt;

  // Relationships
  @hasMany('units') units;
}
