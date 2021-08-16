'use strict';

let submit = document.getElementById('submit');

let regInfo=[];


submit.addEventListener('submit', getdata);
function getdata(e){
  e.preventDefault();


  let username=e.target.username.value;
  let userpass=e.target.password.value;
  regInfo.push(username+'.' + userpass);

  for (let i = 0; i <= regInfo.length-1; i++) {
    new User (regInfo[i].split('.')[0] ,regInfo[i].split('.')[1]);
    
  }

  localStorage.user=JSON.stringify(User.userArr);

}

function User (name ,pass){
  this.name=name;
  this.pass=pass;
  User.userArr.push(this);

}


User.userArr=[];






