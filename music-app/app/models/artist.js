import Model, {attr, hasMany} from '@ember-data/model';

export default Model.extend({

  name: attr('string'),
  mobile: attr('number'),
  songs: hasMany('song'),

});
