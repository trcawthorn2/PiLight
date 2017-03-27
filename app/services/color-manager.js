import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    createColor(red, green, blue, percentage, soundEnabled, fadeEnabled){
        let store = this.get('store');
        let color = store.createRecord('color', { 
            red:red, 
            green: green, 
            blue:blue ,
            percentage: percentage,
            soundEnabled: soundEnabled,
            fadeEnabled: fadeEnabled
        });
        color.save();
        return color;
    },
    getAllColors(){
        return this.get('store').findAll('color');
    },
    removeColor(color){
        console.error('called delete', color);
        color.destroyRecord();   
    }
});
