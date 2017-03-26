import Ember from 'ember';

export default Ember.Component.extend({
    colorManager: Ember.inject.service('color-manager'),
    lightManager: Ember.inject.service('light-manager'),
    classNames:['addColorForm'],
    defaultColors: Ember.A([
                            {red:255,blue:0,green:0},
                            {red:255,blue:255,green:0},
                            {red:255,blue:255,green:255},
                            {red:255,blue:0,green:255},
                            {red:0,blue:255,green:0},
                            {red:0,blue:0,green:255},
                            {red:0,blue:255,green:255},
                            {red:0,blue:0,green:0}
                           ]),
    percentage: 100,
    soundEnabled: true,
    color:"000000",
    hex2rgb(hex){
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        } : null;
    },
    actions:{
        showForm(){
            this.set('isShowingForm' , !this.get('isShowingForm'));
        },
        addCustomColor(){
            this.set('isShowingForm', false);
            this.set('isShowingCustomColorForm', true);
        },
        closeCustomColor(){
            this.set('isShowingCustomColorForm', false);
        },
        sendCustomerColor(){
            let colorManager = this.get('colorManager');
            let rgb = this.hex2rgb(this.get('color'));
            let lightColor = colorManager.createColor(rgb.red,rgb.green,rgb.blue,this.get('percentage'), this.get('soundEnabled'), this.get('fadeEnabled'));
            this.get('lightManager').changeLightColor(lightColor);
            this.set('colors', colorManager.getAllColors());
            this.set('isShowingCustomColorForm', false);
        },
        sendColor(color){
            let colorManager = this.get('colorManager');
            let lightColor = colorManager.createColor(color.red, color.green, color.blue, this.get('percentage'), this.get('soundEnabled'), this.get('fadeEnabled'));
            this.get('lightManager').changeLightColor(lightColor);
            this.set('isShowingForm', false);
        }
    }
});
