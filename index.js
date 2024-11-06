// console.log(firebase)
let username = document.getElementById('username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let checkbox = document.querySelector('#checkbox');
let signupbtn = document.querySelector('#btn');


// signupbtn.addEventListener('click',async ()=>{
//     if(checkbox.checked){
//     await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//         .then(async (user) => {
//           console.log(user.user.uid)

//     let userobj = {
//         name : username.value,
//         email: email.value,
//         password : password.value,
//         userId : user.user.uid
//     };
//     // console.log(userobj);

// await firebase.database().ref("users").child(user.user.uid).set(userobj)
//   alert("user save database")

//    })   
//    .catch((error)=>{
//     alert(error.message)
//    })}
// })

// function clear (){
//     email.value = "";
// username.value = "";
// password.value = "";
// }

signupbtn.addEventListener('click', async function () {
    await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(async (user) => {
            console.log(user.user.uid)
            let userobject = {
                name: username.value,
                email: email.value,
                password: password.value,
                userId: user.user.uid
            }
            await firebase.database().ref("users").child(user.user.uid).set(userobject)
            alert("user save database")
            email.value = "";
            username.value = "";
            password.value = "";

            window.location.href = "main.html"

        })
        .catch((e) => {
            alert(e.message)
        })


})
