import { subscribeSuccess } from '../alerts/alerts'

function SubscribeEmail(email){
    let userEmail = email;
    
    localStorage.setItem("userEmail", userEmail);
    // Save user email in localStorage for verification
    // TBD where send info of user to handle the subscription
    subscribeSuccess();
}

export default SubscribeEmail