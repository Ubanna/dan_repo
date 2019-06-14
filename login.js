
let attempt = document.querySelector("#submit")
attempt.addEventListener("click", validate)


function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "Ubanna" && password == "123456"){
        alert("Logged In");
        window.location.href = "navbar.html";
        
    } else{

        alert("Please stop")
    }

};
console.log(attempt)

// function reverse (str) {
//  console.log(str.split('').reverse().join(''))
// }

// reverse('Ubanna')

// function reverse (str) {

// }

// function reverse (num) {
//    let reversed = num.toString().split('').reverse().join('')
//   return  Math.sign(num) * parseInt(reversed);
// };

// console.log(reverse(-54));
