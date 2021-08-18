'use strict';

let login =document.getElementById('login');
login.addEventListener('submit', getdatalog);
function getdatalog(event){
  event.preventDefault();


  let usernamelog=event.target.username.value;
  let userpasslog=event.target.password.value;
  let login;
  if (localStorage.user) {

    login =JSON.parse(localStorage.user);


    for (let i = 0; i < login.length; i++) {
      if (login[i].name === usernamelog && login[i].pass === userpasslog ) {

        alert('nice');
        localStorage.user1= 'logedin';
        let str = '';
        str +=`<h1>Congratulation</h1>
        <p>
            Now You Have a power to vote ,see chart & a lot of another feature 
        </p>
         `;

        document.getElementById('logedin').innerHTML = str;
        break;
      }else{
        alert('Wrong username or password');
        break;
      }

    }
  }else{
    alert('regiester please');
  }

}

