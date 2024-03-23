const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');

form.addEventListener('submit',(e)=>{
    if(!ValidateInputs()){
        e.preventDefault();
    }
})

function ValidateInputs(){
    const usernameval=username.Value.trim();
    const emailval=email.Value.trim();
    let success=true

    if(usernameval===''){
        success=false;
        SetError(username,'Username must be required')
    }
    else{
        SetSuccess(username)
    }
    if(emailval===''){
        success=false;
        SetError(email,'Email must be required')
    }
    else if(!ValidateEmail(emailval)){
        success=false;
        SetError(email,'Please Enter a valid Email')   
    }
    else{
        SetSuccess(email)
    }
}
function SetError(element,message){
    const user=element.ParentElement;
    const errorElement=user.querySelector('.error')
    errorElement.innertext=message;
    user.classList.add('error')
    user.classList.remove('success')
}
function SetSuccess(){
    const user=element.ParentElement;
    const errorElement=user.querySelector('.error')
    errorElement.innertext='';
    user.classList.add('success')
    user.classList.remove('error')
}
