//### Guarda em variável a página atual
var sPagAtual=document.location.href.toUpperCase();

//### Função que abre janela de chat
function MostraChatP(){
 popup=window.open('ChatLogin.asp?IDLoja='+FC$.IDLoja,'Chat','top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes');
 popup.focus();return void(0);
}

//### Função que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inválida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}
