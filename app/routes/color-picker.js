import Ember from 'ember';

export default Ember.Route.extend({
    colorManager: Ember.inject.service('color-manager'),
    model(){
        let colorManager = this.get('colorManager');
        return colorManager.getAllColors();
    }
});
