export const validateEmailAndPassword = (email,password) => {
    const emailId = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
    const passwordcheck = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    
    
  
    
    if(!emailId) return "Please enter a valid email address or phone number.";
    if(!passwordcheck) return "Your password must contain between 4 and 60 characters."

    return null;
}