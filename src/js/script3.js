function openSlideMenu(){
    document.getElementById('side-menu').style.width='250px';
       
}
function closeSlideMenu(){
    document.getElementById('side-menu').style.width='0';
     
}
const names =document.getElementById('names');
const email =document.getElementById('email');
const messages =document.getElementById('messages');
const formis =document.getElementById('formis');
const errorElement=document.getElementById('error');
formis.addEventListener('submit', (e)=>{
    let message=[];
    if (names.value === '' || names.value== null) {
        message.push('name is required!');
    } 
    if(email .value.length<8){
        message.push('email must be longer than 8 characters!');

    }
    if(messages.value.length<10){
        message.push('messages must exceed 10 characters!');
    }  
    if (message.length > 0){
        e.preventDefault()
        errorElement.innerText=message.join(', ');
    }
 

})

