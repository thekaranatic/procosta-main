function status(){
    if(navigator.onLine)
        alert("Browser online")
    else
        alert("Browser offline")
}

function alert_No_access_to_mobile(){
    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;
  
    /* Creating a regular expression 
    containing some mobile devices keywords 
    to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details
    it returns boolean value*/
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
        alert("You are using a Mobile Device");
    } else {
        alert("You are using Desktop");
    }
}