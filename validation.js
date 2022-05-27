const nombre = document.getElementById("name")
const mail = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",e=>{
   e.preventDefault()
   let validemail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   if ( nombre.value===''){
    alert ("Por favor, ingrese nombre");

}
   else if ( nombre.value.length < 3){
    alert("Nombre Muy corto");
}
  if(mail.value===''){
      alert("Por favor ingrese mail")
  }
  else if(!validemail.test(email.value)){
      alert ("Mail no valido");
  }
  if (password.value===''){
      alert ("Por favor ingrese contraseña");
  }

  else if (password.value.length<=5){
      alert("Ingrese contraseña mayor a 5 digitos");
  }
  else {
      alert("Enviado");
  }
})