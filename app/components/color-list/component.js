import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['colorList'],
    colorManager: Ember.inject.service('color-manager'),
    lightManager: Ember.inject.service('light-manager'),
    isSelectingColor: false,
    actions:{
        selectColor(){
            this.set('isSelectingColor', !this.get('isSelectingColor'));
        },
        removeColor(color){
            let colorManager = this.get('colorManager');
            colorManager.removeColor(color);
        },
        sendColor(color){
            let lightManager = this.get('lightManager');
            lightManager.changeLightColor(color);
        },
        powerOff(){
            this.get('lightManager').powerOff();
            this.set('isSelectingColor', false);
        },
        sequence(colorSequence, interval){
            let lightManager = this.get('lightManager');
            if(!colorSequence){
                colorSequence = this.get('colors');
                interval = 10;
            }
            lightManager.sequence(colorSequence, interval);
        }
    }
});
