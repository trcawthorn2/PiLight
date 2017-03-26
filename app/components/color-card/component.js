import Ember from 'ember';

export default Ember.Component.extend({
    backgroundColor: Ember.computed('color', function(){
        let color=this.get('color');
        return "rgb(" + color.get('red') +", "+ color.get('green') +", " + color.get('blue') +")";
    }),
    colorChanged: Ember.observer('color', function(){
        console.error(this.get('color'));
    }),
    actions:{
        sendColor(){
           this.sendAction("send", this.get('color'));
        },
        removeColor(){
           this.sendAction("remove", this.get('color'));
        }
    }
});
