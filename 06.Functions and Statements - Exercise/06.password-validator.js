function passwordValidator(password){
    function checkPasswordLength(pass){
        return pass.length >= 6 && pass.length <= 10;
    }
    function checkLettersAndDigits(pass){
        const regex = /^[a-zA-Z0-9]+$/g;
        return regex.test(pass);
    }
    function checkAtLeastTwoDigits(pass){
        const minLength = 2;
        const regex = /[0-9]/g;
        return pass.match(regex)?.length >= minLength;
    }
    function printMessages(pass){
        if(!checkPasswordLength(pass)){
            messages.push('Password must be between 6 and 10 characters');
        }
    
        if(!checkLettersAndDigits(pass)){
            messages.push('Password must consist only of letters and digits');
        }
    
        if(!checkAtLeastTwoDigits(pass)){
            messages.push('Password must have at least 2 digits');
        }
    
        if(messages.length === 0){
            messages.push('Password is valid');
        }
    
        messages.forEach((message) => {
            console.log(message);
        });
    }
    
    let messages = [];
    printMessages(password);
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
