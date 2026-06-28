// ===============================
// ALTERAR TEMA
// ===============================

const botaoTema = document.getElementById("tema");

if(localStorage.getItem("tema") === "escuro"){

document.body.classList.add("dark");

}

if(botaoTema){

botaoTema.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("tema","escuro");

}else{

localStorage.setItem("tema","claro");

}

});

}

// ===============================
// VALIDAÇÃO DO FORMULÁRIO
// ===============================

const formulario = document.getElementById("formContato");

if(formulario){

formulario.addEventListener("submit",function(event){

event.preventDefault();

const nome=document.getElementById("nome").value.trim();

const email=document.getElementById("email").value.trim();

const mensagem=document.getElementById("mensagem").value.trim();

const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(nome===""){

alert("Informe seu nome.");

return;

}

if(!regex.test(email)){

alert("Digite um e-mail válido.");

return;

}

if(mensagem===""){

alert("Digite uma mensagem.");

return;

}

alert("Mensagem enviada com sucesso!");

formulario.reset();

});

}