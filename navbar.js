// let nameHigh = prompt("Your name?", "");


// const seen = document.querySelector(".user-boy")
// seen.innerHTML = `${nameHigh}`;

let carts = [];

const addToCart = () => {
   
    let cart = {
        product: document.getElementById("namer").value, 
        amount: document.getElementById("pricer").value, 
        delivery: document.getElementById("deliver").value 

    }

    carts.push(cart);

    localStorage.setItem('cart',JSON.stringify(carts));

}
// console.log(localStorage.getItem('cart'))

function logout(){
    console.log("Logging out")
};


const leave = document.querySelector("#logout")
leave.addEventListener("click",()=>{
    alert("Logged out")
    window.location.href = "login.html"
});
console.log(leave)

const chatting = document.querySelector("#chatBtn")

chatting.addEventListener('click', () => {
    const chatDad = document.querySelector("#dad")
    chatDad.style.display = "flex";

})


let trigger = [
	["hi","hey","hello"], 
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["dark phoenix", "Dark Phoenix", "Phoenix", "phoenix", "XMEN", "xmen", "dark"],
  ["I miss you", "miss you"]
];
let reply = [
	["Hi, Welcome to Uba Cinema!","Hey,Welcome to Uba Cinema!","Hello,Welcome to Uba Cinema!"], 
	["Fine", "Pretty well", "Fantastic"],
	["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually", "I am in LearnFactory, Aba"],
	["I am 1 day old"],
	["I am just a bot", "I am a bot. What are you?"],
	["Ubanna", "My God"],
	["I am nameless", "I don't have a name"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
  ["Bye", "Goodbye", "See you later"],
  [`DARK PHOENIX
  Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world.
  Starring: James McAvoy, Michael Fassbender, Jennifer Lawrence
  Fri to Thu: 10:20AM, 12:20PM, 2:25PM, 4:30PM, 6:45PM, 8:55PM
  Price: NGN1,500
  Cinema Hall - Hall Z
  
  RUNNING TIME 87 MINS`],
  ["Me too", "I miss you too"]
];
let alternative = ["Come again...", "Hmmmm...", "Please what movie are you interested in?", "Ask me anything"];
let totalChat = document.querySelector("#submit").addEventListener("click", function(e){
		let input = document.getElementById("input").value;
	document.getElementById("user").innerHTML += input + "<br>";
		output(input);
	}
);
function output(input){
	try{
		let product = input + "=" + eval(input);
	} catch(e){
		let text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			let product = compare(trigger, reply, text);
		} else {
			let product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	document.getElementById("chatbot").innerHTML += product + "<br>";
	
	document.getElementById("input").value = ""; 
}
function compare(arr, array, string){
	let item;
	for(let x=0; x<arr.length; x++){
		for(let y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}

