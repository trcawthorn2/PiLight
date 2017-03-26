import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    parseColor(lightColor){
        let color = {
            red: lightColor.get('red'),
            blue: lightColor.get('blue'),
            green: lightColor.get('green'),
            magnitude: lightColor.get('percentage')
        };
        return color;
    },
    getURI(){
        return 'http://'+window.location.hostname + ':8000';
    },
    powerOff(){
        let uri = this.getURI();
        this.get('ajax').request(uri+ "/off", {method: "POST", data: {"fade":true}});
    },
    changeLightColor(lightColor){
        let uri = this.getURI();
        this.get('ajax').request(uri+ "/color/show", {
            method: "POST", 
            data: JSON.stringify({
                color: this.parseColor(lightColor),
                fade: lightColor.get('fadeEnabled'),
                soundSensitivity: {
                    enabled: lightColor.get('soundEnabled'),
                    threshold: 70    
                }
            })
        });
    },
    sequence(colorSequence, interval){
        if(colorSequence.get('length') > 0){
            let sequence = {
                fade:colorSequence.objectAt("0").get('fadeEnabled'),
                interval: interval,
                soundSensitivity:{
                    enabled: colorSequence.objectAt("0").get('soundEnabled'),
                    threshold:70
                },
                sequence: [

                ]
            };

            colorSequence.forEach((item)=>{
                sequence.sequence.push(this.parseColor(item));
            });
            
            let uri = this.getURI();
            this.get('ajax').request(uri+ "/sequence/show", {
                method: "POST", 
                data: JSON.stringify(sequence)
            });
        }
    }
});
