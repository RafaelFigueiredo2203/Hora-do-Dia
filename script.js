function carregar() {
    
var data = window.document.getElementById('data')
var img = window.document.getElementById('imagem')
var hour = new Date() 
var agora = hour.getHours()
var minutos = hour.getMinutes()

data.innerHTML = `Agora são ${agora} horas e ${minutos} minutos.` 
 if (agora >= 0 && agora < 12){
     //Bom dia!
     img.src = 'manha.png'
     document.body.style.background = '#e2cd9f'
 }else if ( agora >= 12 && agora <= 18){
     //Boa tarde!
     img.src = 'tarde.png'
     document.body.style.background = '#b9846f'
 }else {
     //Boa noite!
     img.src = 'noite.png'
     document.body.style.background = '#515154'
 }

}
