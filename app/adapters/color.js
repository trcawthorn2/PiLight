import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
    createRecord: function(store, type, snapshot) {
        if(!snapshot.id){
            snapshot.id = new Date().getTime();   
        }
        var data = this.serialize(snapshot, { includeId: true });
        
        return new Ember.RSVP.Promise(function(resolve) {
            let colors = JSON.parse(localStorage.getItem("colors"));
            if(!colors){
                colors = [];
            }
            colors.push(data.data);
            localStorage.setItem("colors", JSON.stringify(colors));
            resolve(data);
        });
    },
    deleteRecord: function(store, type, snapshot){
        return new Ember.RSVP.Promise(function(resolve) {
            let colors = JSON.parse(localStorage.getItem("colors"));
            if(!colors){
                colors = [];
            }
            for(var i =0; i < colors.length; i++){
                if(colors[i].id.toString() === snapshot.id.toString()){
                    colors.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("colors", JSON.stringify(colors));
            resolve();
        });
    },
    findAll: function(){
        return new Ember.RSVP.Promise(function(resolve) {
            let colors = JSON.parse(localStorage.getItem("colors"));
            if(!colors){
                colors = [];
            }
            resolve({data:colors});
        });
    }
});
