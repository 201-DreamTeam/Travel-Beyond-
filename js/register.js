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
    console.log('gggg');
  }

  localStorage.user=JSON.stringify(User.userArr);
  console.log(regInfo);
  console.log(User.userArr[0][1]);
}

function User (name ,pass){
  this.name=name;
  this.pass=pass;
  User.userArr.push(this);

}


User.userArr=[];




// console.log();


