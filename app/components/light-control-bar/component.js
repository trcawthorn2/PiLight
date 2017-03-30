import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['controlBar'],
    actions:{
        powerOff(){
            this.sendAction('off');
        },
        partyTime(){
            let colors = Ember.A();
            colors.addObject(Ember.Object.create({red:0, green:255, blue:0, percentage:100, soundEnabled:false, fadeEnabled:true}));
            colors.addObject(Ember.Object.create({red:255, green:0, blue:0, percentage:100}));
            colors.addObject(Ember.Object.create({red:0, green:0, blue:255, percentage:100}));
            colors.addObject(Ember.Object.create({red:0, green:255, blue:255, percentage:100}));
            colors.addObject(Ember.Object.create({red:255, green:255, blue:0, percentage:100}));
            colors.addObject(Ember.Object.create({red:255, green:0, blue:255, percentage:100}));
            colors.addObject(Ember.Object.create({red:255, green:255, blue:255, percentage:100}));
 
            this.sendAction('sequence', colors, 0);
        },
        sexyTime(){
            let colors = Ember.A();
            colors.addObject(Ember.Object.create({red:0, green:255, blue:0, percentage:10, soundEnabled:false, fadeEnabled:true}));
            colors.addObject(Ember.Object.create({red:255, green:0, blue:0, percentage:10}));
            colors.addObject(Ember.Object.create({red:0, green:0, blue:255, percentage:10}));
            colors.addObject(Ember.Object.create({red:0, green:255, blue:255, percentage:10}));
            colors.addObject(Ember.Object.create({red:255, green:255, blue:0, percentage:10}));
            colors.addObject(Ember.Object.create({red:255, green:0, blue:255, percentage:10}));
            colors.addObject(Ember.Object.create({red:255, green:255, blue:255, percentage:10}));
        
            this.sendAction('sequence', colors, 7);
        },
        activateSequence(){
            this.sendAction('sequence');
        }
    }
});
