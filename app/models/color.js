import DS from 'ember-data';

export default DS.Model.extend({
    red: DS.attr('number'),
    green: DS.attr('number'),
    blue: DS.attr('number'),
    percentage: DS.attr('number'),
    soundEnabled: DS.attr('boolean'),
    fadeEnabled: DS.attr('boolean')
});
