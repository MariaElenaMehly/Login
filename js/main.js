(function() {
'use strict';
window.addEventListener('load', function(event){
    
    user.addEventListener('blur', function(){
        if(user.value==0)
        {
            user.parentNode.classList.add('error');
        }
    });
    user.addEventListener('focus', function(){
        user.parentNode.classList.remove('error');
    });
    password.addEventListener('blur', function(){
        if(password.value==0)
        {
            password.parentNode.classList.add('error');
        }
    });
    password.addEventListener('focus', function(){
        password.parentNode.classList.remove('error');
    });

    login.addEventListener('submit', function(e){
        e.preventDefault()
        console.log('sfsd')
        if(user.value!=0 && password.value!=0)
        {
            login.submit();
        }else{
            if(user.value==0)
            {
                user.parentNode.classList.add('error');
            }
            if(password.value==0)
            {
                password.parentNode.classList.add('error');
            } 
            validate.innerHTML="Verifique los datos"
            setTimeout(function(){
                validate.innerHTML="";
            }, 1500)
        }
    })
});
})();