let email = document.getElementById("email");
let password = document.getElementById("password");
let loginbtn = document.getElementById("btn");

loginbtn.addEventListener('click',async function(){
    await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((user)=>{
        console.log(user.user.uid);
        localStorage.setItem("userId",user.user.uid);
        clearfield();
        window.location.replace('main.html')
    })
    .catch((e)=>{
        localStorage.clear()
        alert(e.message)
    })
})

function clearfield (){
    email.value= "";
    password.value = "";
}