const form = document.querySelector('#form');
const usernameInput=document.querySelector('#Username');
const emailInput=document.querySelector('#Email');

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    validateform();
    subscribe();
    

});

function validateform(){
    if(usernameInput.value.trim()==''){
        setError(usernameInput,'Name Required');
    }
    else{
        setSuccess(usernameInput);
        usernameInput.value='done';
        
    }
    //E-mail
    if(emailInput.value.trim()==''){
        setError(emailInput,'Email Required');
    }
     else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
        emailInput.value='done';
        
     }
    else{
        setError(emailInput,'Provide Valid Email');
       
    }
   
}

function setError(element,errorMessage){
    const parent=element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }
    parent.classList.add('error');
    const paragraph= parent.querySelector('p');
    paragraph.textContent = errorMessage;

}

function setSuccess(element){
    const parent=element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success');

}

function isEmailValid(email) 
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

function subscribe(){
    if(usernameInput.value =='done' && emailInput.value==='done' ){
    alert('Congratulations You have been sucessfuly subscribed');
    }
}



    