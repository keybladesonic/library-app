import {computed, observer} from '@ember/object'; //imports computed and observer from ember
import Controller from '@ember/controller';
import { empty } from '@ember/object/computed'; // imports empty to check for empty
import {match, not} from '@ember/object/computed'; //importing match and not for form validation

export default Controller.extend({


  isDisabled: empty("emailAddress"),
  //computed("emailAddress", function(){
  //   return this.get("emailAddress") === "";
  // }),
  responseMessage: '',
  emailAddress: '',

  headerMessage : "Coming Soon",

  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"), //possible to have dupe keys???

  actions: {

    saveInvitation(){
      alert(`Saving of the following email address is in progress: ${this.get("emailAddress")}`);
      this.set("responseMessage", `Thank you! We've just saved your email address: ${this.get("emailAddress")}`);
      this.set("emailAddress", "");
    }
  }

  // actualEmailAddress: computed("emailAddress", function(){
  //   console.log("actualEmailAddress function is called: ", this.get("emailAddress"));
  // }),
  //
  // emailAddressChanged: observer("emailAddress", function(){
  //   console.log("observer is called", this.get('emailAddress'));
  // })

});
