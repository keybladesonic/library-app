import Controller from '@ember/controller';
//import { empty } from '@ember/object/computed'; // imports empty to check for empty
import {match, not} from '@ember/object/computed'; //importing match and not for form validation
import {gte} from "@ember/object/computed"; //gets the gte property (greater than or equal) to check for 5 or more chars
import {and} from "@ember/object/computed"; //uses and to combine computed properties for logically and property

export default Controller.extend({

  headerMessage: "Contact us",

  emailAddress: "",
  confirmMessage: "",
  message: "",

  // isDisabled: empty("emailAddress"),

  isValidEmail: match("emailAddress", /^.+@.+\..+$/), //check if email address is valud
  //isDisabled: not("isValid"), //possible to have dupe keys???


  isLongEnough: gte("message.length",5), //check if message is at least 5 chars
  isValid: and("isValidEmail", "isLongEnough"), //and propery to put them together
  isDisabled: not("isValid"), //checks if the form is valid before making button available


  actions: {

    sendMessage(){
      alert(`Sending of the message is in progress: ${this.get("emailAddress")} \n ${this.get("message")}`);
      this.set("confirmMessage", `Thank you! We've got your message and will get in touch soon!`);
      this.set("emailAddress", "");
      this.set("message", "");
    }
  }



});
