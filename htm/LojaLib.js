function AlteraEstIcPagto(oIcone){
  oIcone.style.width='65';
  oIcone.style.height='41';
  oIcone.style.cursor='pointer';
}

function AlteraImgsFormaPagto(){
  IcPagtoBB=document.getElementById("idImgPagto1FC"); //Boleto bancário
  if(IcPagtoBB){IcPagtoBB.src=sCaminhoImages+'icpagtobb.png';AlteraEstIcPagto(IcPagtoBB);}
  IcPagtoCE=document.getElementById("idImgPagto6FC"); //Contra entrega
  if(IcPagtoCE){IcPagtoCE.src=sCaminhoImages+'icpagtoce.png';AlteraEstIcPagto(IcPagtoCE);}
  IcPagtoDB=document.getElementById("idImgPagto4FC"); //Depósito bancário
  if(IcPagtoDB){IcPagtoDB.src=sCaminhoImages+'icpagtodb.png';AlteraEstIcPagto(IcPagtoDB);}
  IcPagtoBR=document.getElementById("idImgPagto19FC"); //Banco do Brasil
  if(IcPagtoBR){IcPagtoBR.src=sCaminhoImages+'icpagtobr.png';AlteraEstIcPagto(IcPagtoBR);}
  IcPagtoIS=document.getElementById("idImgPagto5FC"); //Itaú Shopline
  if(IcPagtoIS){IcPagtoIS.src=sCaminhoImages+'icpagtois.png';AlteraEstIcPagto(IcPagtoIS);}
  IcPagtoRP=document.getElementById("idImgPagto17FC"); //RealPague
  if(IcPagtoRP){IcPagtoRP.src=sCaminhoImages+'icpagtorp.png';AlteraEstIcPagto(IcPagtoRP);}
  IcPagtoVE=document.getElementById("idImgPagto16FC"); //VISA Electron
  if(IcPagtoVE){IcPagtoVE.src=sCaminhoImages+'icpagtove.png';AlteraEstIcPagto(IcPagtoVE);}
  IcPagtoPP=document.getElementById("idImgPagto15FC"); //PayPal
  if(IcPagtoPP){IcPagtoPP.src=sCaminhoImages+'icpagtopp.png';AlteraEstIcPagto(IcPagtoPP);}
  CCAmex=document.getElementById("idImgPagto3_1FC"); //AMEX
  if(CCAmex){CCAmex.src=sCaminhoImages+'icpagtoae.png';AlteraEstIcPagto(CCAmex);}
  CCAura=document.getElementById("idImgPagto3_6FC"); //Aura
  if(CCAura){CCAura.src=sCaminhoImages+'icpagtoau.png';AlteraEstIcPagto(CCAura);}
  CCDine=document.getElementById("idImgPagto3_2FC"); //Diners
  if(CCDine){CCDine.src=sCaminhoImages+'icpagtodn.png';AlteraEstIcPagto(CCDine);}
  CCElo=document.getElementById("idImgPagto3_7FC"); //Elo
  if(CCElo){CCElo.src=sCaminhoImages+'icpagtoel.png';AlteraEstIcPagto(CCElo);}
  CCHiperCard=document.getElementById("idImgPagto3_5FC"); //Hipercard
  if(CCHiperCard){CCHiperCard.src=sCaminhoImages+'icpagtohc.png';AlteraEstIcPagto(CCHiperCard);}
  CCMast=document.getElementById("idImgPagto3_3FC"); //MasterCard
  if(CCMast){CCMast.src=sCaminhoImages+'icpagtomc.png';AlteraEstIcPagto(CCMast);}
  CCVisa=document.getElementById("idImgPagto3_4FC"); //VISA
  if(CCVisa){CCVisa.src=sCaminhoImages+'icpagtovs.png';AlteraEstIcPagto(CCVisa);}
  IcPagtoPS=document.getElementById("idImgPagto18FC"); //PagSeguro
  if(IcPagtoPS){IcPagtoPS.src=sCaminhoImages+'icpagtops.png';AlteraEstIcPagto(IcPagtoPS);}
  IcPagtoMP=document.getElementById("idImgPagto21FC"); //MercadoPago
  if(IcPagtoMP){IcPagtoMP.src=sCaminhoImages+'icpagtomp.png';AlteraEstIcPagto(IcPagtoMP);}
  IcPagtoMI=document.getElementById("idImgPagto22FC"); //MoIP
  if(IcPagtoMI){IcPagtoMI.src=sCaminhoImages+'icpagtomi.png';AlteraEstIcPagto(IcPagtoMI);}
  IcPagtoVK=document.getElementById("idImgPagto20FC"); //Vakinha
  if(IcPagtoVK){IcPagtoVK.src=sCaminhoImages+'icpagtovk.png';AlteraEstIcPagto(IcPagtoVK);}
  pagto1=document.getElementById("idImgPagto9FC"); //Pagamento 1
  if(pagto1){pagto1.src=sCaminhoImages+'pagto1.gif';AlteraEstIcPagto(pagto1);}
  pagto2=document.getElementById("idImgPagto10FC"); //Pagamento 2
  if(pagto2){pagto2.src=sCaminhoImages+'pagto2.gif';AlteraEstIcPagto(pagto2);}
  pagto3=document.getElementById("idImgPagto11FC"); //Pagamento 3
  if(pagto3){pagto3.src=sCaminhoImages+'pagto3.gif';AlteraEstIcPagto(pagto3);}
  pagto4=document.getElementById("idImgPagto12FC"); //Pagamento 4
  if(pagto4){pagto4.src=sCaminhoImages+'pagto4.gif';AlteraEstIcPagto(pagto4);}

}

function MostraDadosCesta(){
  if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
  else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
  xmlhttp.open("GET","XMLCart.asp?IDLoja="+IDLojaNum+"",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML; 
  var x=xmlDoc.getElementsByTagName("item");
  var z=xmlDoc.getElementsByTagName("cart");
  try{currencyProdCart=(z[0].getElementsByTagName("currency")[0].childNodes[0].nodeValue);}
  catch(e){currencyProdCart="R$"}
  try{TotalQtyProdCart=(z[0].getElementsByTagName("TotalQty")[0].childNodes[0].nodeValue);}
  catch(e){TotalQtyProdCart="0"}
  try{subtotalProdCart=(z[0].getElementsByTagName("subtotal")[0].childNodes[0].nodeValue);}
  catch(e){subtotalProdCart="0,00"}
  var iItensCesta=TotalQtyProdCart;
  if(iItensCesta==0){sItem="vazio"} 
  else if(iItensCesta==1){sItem="1 item"}
  else {sItem=iItensCesta+" itens"}
  try{document.getElementById("QtdItensCesta").innerHTML=sItem;}
  catch(e){}
  try{document.getElementById("ValorItensCesta").innerHTML=currencyProdCart + " " + subtotalProdCart;}
  catch(e){}
}

function FuncCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  if(iErr==0)MostraDadosCesta();
}

var oDivShowCartOnPage=null;
var iLastCartOnPage=0;

function ShowCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  var oPos=getPos(este);
  if(oDivShowCartOnPage==null){
    var oNewElement=document.createElement("div");
    oNewElement.setAttribute("id","DivShowCartOnPage"); 
    oDivShowCartOnPage=este.parentNode.insertBefore(oNewElement,este);
  }
  oDivShowCartOnPage.style.backgroundColor="";
  oDivShowCartOnPage.style.borderColor="#ffffff";
  oDivShowCartOnPage.style.color="";
  oDivShowCartOnPage.style.border="";
  oDivShowCartOnPage.style.marginTop="-170px";
  oDivShowCartOnPage.style.marginLeft="-495px";
  oDivShowCartOnPage.style.position="absolute";
  oDivShowCartOnPage.style.zIndex="1";
  oDivShowCartOnPage.style.visibility="visible";
  if(iErr==0)sBackImage=""; else sBackColor=""
  var sHTML="<table width=250 height=120 cellpadding=3 cellspacing=3>";
     sHTML+="<tr><td colspan=5 align=center style='background-color:#"+ sBackImage +";color:#ffffff;border-width:1px;border-color:#3b6e22;font-weight:bold;font-size:12px;font-family:verdana;cursor:pointer'>"+" </td></tr>";
     if(iErr==0){
       sHTML+="<tr height=70>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="<td align=center class=FC-ShowCartOffPageLink><a href='addproduto.asp?idloja="+ IDLoja +"'>"+ sCartText +"</a></td>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="</tr>";

      MostraDadosCesta();
     }
  
   
     else{
       sHTML+="<tr height=20>";
       sHTML+="<td colspan=5 align=center><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
     }
     sHTML+="</table>";
  oDivShowCartOnPage.style.top=oPos.y+"px";
  oDivShowCartOnPage.style.left=oPos.x+"px";
  oDivShowCartOnPage.innerHTML=sHTML;
  iLastCartOnPage++;
  setTimeout("if(iLastCartOnPage=="+ iLastCartOnPage +")oDivShowCartOnPage.style.visibility='hidden';",4000);
  
}

/* Progress Bar */
function fnProgressBarLoading(){
NProgress.start();
window.addEventListener("load",function(event){
NProgress.done();
});
}

// Don't Go Popup
FCLib$.onReady(function(){
if(FCLib$.GetID("overlay")){
//Dynamic Don't Go Container
var dynamicDontGoContainer = document.createElement('div');
dynamicDontGoContainer.id = 'ShowDontGoPopup';
dynamicDontGoContainer.className = 'DontGoPopup';
document.getElementsByTagName('body')[0].appendChild(dynamicDontGoContainer);
//Dynamic Don't Go Container Elements
var dynamicDontGoContainerElements = document.createElement('div');
dynamicDontGoContainerElements.className = 'DontGoPopupContent';
dynamicDontGoContainer.appendChild(dynamicDontGoContainerElements);
//Dynamic Don't Go Elements Close Button
var dynamicDontGoElementsCloseButton = document.createElement('div');
dynamicDontGoElementsCloseButton.className = 'DontGoPopupCloseButton';
dynamicDontGoContainerElements.appendChild(dynamicDontGoElementsCloseButton);
dynamicDontGoElementsCloseButton.innerHTML = "<img id='idBtnDontGoClose' border='0'>";
//Dynamic Don't Go Elements Banner
var dynamicDontGoElementsBanner = document.createElement('div');
dynamicDontGoElementsBanner.className = 'DontGoBanner';
dynamicDontGoContainerElements.appendChild(dynamicDontGoElementsBanner);
dynamicDontGoElementsBanner.innerHTML = "<a id='idLinkDontGo' target='_self'><img id='idImgDontGo' src='' border='0'></a>";
//PreLoading Image Banner
var preLoadingDontGoBanner = new Image();
preLoadingDontGoBanner.onload = function () {
document.getElementById('idImgDontGo').src = preLoadingDontGoBanner.src;
};
preLoadingDontGoBanner.src = FC$.PathImg +"popup/faceband1.png?cccfc=1";
//Show Don't Go Popup
FCLib$.fnDontGo(userDontGo,{
DontGoBtnClose:FC$.PathImg +"faceband1fechar.png?cccfc=1", //Close button
DontGoBanner:FC$.PathImg +"popup/faceband1.png?cccfc=1", //Banner
DontGoLink:'', //Link
DontGoAltParam:"UM DESCONTO ESPECIAL PARA VOCÊ!"}, //Alt Param
"DontGoCookie"); //Cookie name
}
});
function userDontGo(oParam){
var OpenDontGoPopup=document.getElementById('ShowDontGoPopup');
if(OpenDontGoPopup){
document.getElementById("idBtnDontGoClose").src=oParam.DontGoBtnClose; //Close button
document.getElementById("idImgDontGo").src=oParam.DontGoBanner; //Banner
document.getElementById("idImgDontGo").alt=oParam.DontGoAltParam; //Alt Param
document.getElementById("idLinkDontGo").href=oParam.DontGoLink; //Link
window.onload=OpenDontGoPopup.style.display="block";
var CloseDontGoPopup=document.getElementsByClassName("DontGoPopupCloseButton")[0];
CloseDontGoPopup.onclick=function(){OpenDontGoPopup.style.display="none";}
}
}


/* Google Suggestions */
function fnCallbackSuggestions(aTerms){
"use strict";
var iTerms=aTerms.length;
if(FC$.Page=="News"){
var sParamName="textobuscanews"
var sIDNotFound="idNotFoundNewsFC";
}
else{
var sParamName="texto"
var sIDNotFound="idTxtCatNotFoundFC";
}
var oNotFound=FCLib$.GetID(sIDNotFound);
if(oNotFound && iTerms>=1){
if(iTerms>10)iTerms=10;
var sTerms="<div id=GoogleTerms><ul>";
var sPlural=(iTerms>1)?"s":"";
sTerms+="<li><b>Busca"+ sPlural +" sugerida"+ sPlural +" pelo Google:</b></li>";
for(var i=0;i<iTerms;i++)sTerms+="<li><a href='"+ FCLib$.fnGetSearchURL(aTerms[i],sParamName) +"'>"+aTerms[i]+"</a></li>";
sTerms+="</ul></div>";
oNotFound.insertAdjacentHTML('afterend',sTerms);
}
}
if(FC$.query!="")FCLib$.onReady(FCLib$.fnGetSuggestions(decodeURIComponent(FC$.query),true,fnCallbackSuggestions));


// ############# Cálculo de frete na cesta #######################
function fnCustomizeCart(){
//insere campo solicitando o CEP para cálculo do lado esquerdo
var oFCCartSubtotals=document.getElementById("FCCartSubtotals");
if(document.getElementById("idColPesoFC"))var sColspan=3; else var sColspan=2;
if(oFCCartSubtotals){
var oNewElement=document.createElement("tr");
oNewElement.setAttribute("id","FCCartFreightCalc");
oNewElement.setAttribute("class","not-on-small");
var oTRFreightCalc=oFCCartSubtotals.parentNode.insertBefore(oNewElement,oFCCartSubtotals);
oTRFreightCalc.innerHTML="<td>Digite o CEP para calcular o frete: <input type=text id=idZipC1 size=10 maxlength=9 class=InputText> <input type=button value='Calcular frete' class=idBut class=InputButton onclick='fnGetShippingValue(1)'></td><td align=right colspan="+ sColspan +"><span id=idShippingObs1></span></td><td align=right><span id=idShippingValue1></span><img src='/images/loading.gif' vspace=3 style='display:none' id=idImgLoadingCEP1></td>";
}
//insere campo solicitando o CEP para cálculo do lado direito
var oFCCartRight=document.getElementById("FCCartSmallSubtotalPrice");
if(!oFCCartRight)oFCCartRight=document.getElementById("FCCartSmallSubtotals");
if(oFCCartRight){
var oNewElement=document.createElement("div");
oNewElement.setAttribute("id","FCCartSmallFreightCalc");
var oTRFreightCalc=oFCCartRight.parentNode.insertBefore(oNewElement,oFCCartRight);
/* var sCEPCont="<div id='FCCartSmallFreight'>";
sCEPCont+=" <div class='FCCartFreightInfo'>";
sCEPCont+=" <span class='FCCartFreightLabel'>Digite o CEP para calcular o frete:</span>";
sCEPCont+=" <input type=number id=idZipC2 size=10 maxlength=9 class=InputText>";
sCEPCont+=" <div id='FCCartSmallFreightBut'>";
sCEPCont+=" <input type=button value='Calcular frete' class=idBut class=InputButton onclick='fnGetShippingValue(2)'>";
sCEPCont+=" </div>";
sCEPCont+=" <img src='/images/loading.gif' vspace=3 style='display:none' id=idImgLoadingCEP2>";
sCEPCont+=" </div>";
sCEPCont+="</div>";
sCEPCont+="<div id='FCCartSmallFreightPrice'>";
sCEPCont+=" <ul>";
sCEPCont+=" <li class='FCCartFreightPriceLabel' id=idShippingObs2>Frete:</li>";
sCEPCont+=" <li class='FCCartFreightPriceValue' id=idShippingValue2>Calcule acima</li>";
sCEPCont+=" </ul>";
sCEPCont+="</div>";*/
var sCEPCont="<div id='FCCartSmallFreight'>";
sCEPCont+=" <div id='FCCartSmallFreight-title'>";
sCEPCont+=" <span class='FCCartFreightLabel'>Digite o CEP para calcular o frete</span>";
sCEPCont+=" </div>";
sCEPCont+=" <div class='FCCartSmallFreight-field' id='FCCartSmallFreight-input'>";
sCEPCont+=" <input type=text id=idZipC2 size=10 maxlength=9 class=InputText>";
sCEPCont+=" <input type=button value='OK' class=idBut class=InputButton onclick='fnGetShippingValue(2)'>";
sCEPCont+=" </div>";
sCEPCont+=" <img src='/images/loading.gif' vspace=3 style='display:none' id=idImgLoadingCEP2>";
sCEPCont+=" </div>";
sCEPCont+="</div>";
sCEPCont+="<div id='FCCartSmallFreightPrice'>";
sCEPCont+=" <ul>";
sCEPCont+=" <li class='FCCartFreightPriceLabel' id=idShippingObs2>Frete:</li>";
sCEPCont+=" <li class='FCCartFreightPriceValue' id=idShippingValue2>Calcule acima</li>";
sCEPCont+=" </ul>";
sCEPCont+="</div>";
oTRFreightCalc.innerHTML=sCEPCont;
fnGetCEP();
}
}
function fnGetCEP(){
//se já tem CEP em cookie já mosta cálculo
var sNumCEP=FCLib$.GetCookie("CEP"+FC$.IDLoja);
if(sNumCEP && sNumCEP!=""){
document.getElementById("idZipC1").value=sNumCEP;
document.getElementById("idZipC2").value=sNumCEP;
fnGetShippingValue(0);
}
}
function fnGetShippingValue(iField){
if(iField==0){
var sCEP=document.getElementById("idZipC1").value;
if(sCEP=="")sCEP=document.getElementById("idZipC2").value;
}
else{
var sCEP=document.getElementById("idZipC"+iField).value;
}
document.getElementById("idZipC1").value=sCEP;
document.getElementById("idZipC2").value=sCEP;
FCLib$.SetCookie("CEP"+FC$.IDLoja,sCEP);
if(sCEP==""){
document.getElementById("idShippingValue1").innerHTML="<span style=color:#990000;>Informe o CEP</span>";
document.getElementById("idShippingValue2").innerHTML="<span style=color:#990000;>Informe o CEP</span>";
}
else{
document.getElementById("idShippingValue1").innerHTML="";
document.getElementById("idShippingValue2").innerHTML="";
var oImgLoadingCEP1=document.getElementById("idImgLoadingCEP1");
if(oImgLoadingCEP1){oImgLoadingCEP1.style.display="";}
var oImgLoadingCEP2=document.getElementById("idImgLoadingCEP2");
if(oImgLoadingCEP2){oImgLoadingCEP2.style.display="";}
AjaxExecFC("/xmlshippingcep.asp","idloja="+ FC$.IDLoja +"&cep="+ sCEP,false,fnprocessXMLCEPC);
}
}
function fnprocessXMLCEPC(obj){
var oShippingObs1=document.getElementById("idShippingObs1");
var oShippingObs2=document.getElementById("idShippingObs2");
var oShippingValue1=document.getElementById("idShippingValue1");
var oShippingValue2=document.getElementById("idShippingValue2");
var iErr=ReadXMLNode(obj,"err");if(iErr==null)return;
if(iErr!="0"){
var oImgLoadingCEP1=document.getElementById("idImgLoadingCEP1");
if(oImgLoadingCEP1){oImgLoadingCEP1.style.display="none";}
var oImgLoadingCEP2=document.getElementById("idImgLoadingCEP2");
if(oImgLoadingCEP2){oImgLoadingCEP2.style.display="none";}
oShippingValue1.innerHTML="<span id=idErrXMLCEPFC style=color:#990000;>"+ ReadXMLNode(obj,"msg") +"</span>";
oShippingValue2.innerHTML="<span id=idErrXMLCEPFC style=color:#990000;>"+ ReadXMLNode(obj,"msg") +"</span>";
return;
}
oShippingObs1.innerHTML="";oShippingObs2.innerHTML="";oShippingValue1.innerHTML="";oShippingValue2.innerHTML="";
var OptName=ReadXMLNode(obj,"Opt1Name");
var OptValue=ReadXMLNode(obj,"Opt1Value");
var OptObs=ReadXMLNode(obj,"Opt1Obs");
//oShippingObs1.innerHTML="<b>"+ OptName +"</b><br><span class=ObsFreightCalc>"+ OptObs +"</span>";
//oShippingObs2.innerHTML="<b>"+ OptName +"</b><br><span class=ObsFreightCalc>"+ OptObs +"</span>";
oShippingObs1.innerHTML="<b>Frete:</b>";
oShippingObs2.innerHTML="<b>Frete:</b>";
oShippingValue1.innerHTML=OptValue;oShippingValue1.style.display="block";
oShippingValue2.innerHTML=OptValue;oShippingValue2.style.display="block";
var oImgLoadingCEP1=document.getElementById("idImgLoadingCEP1");
if(oImgLoadingCEP1){oImgLoadingCEP1.style.display="none";}
var oImgLoadingCEP2=document.getElementById("idImgLoadingCEP2");
if(oImgLoadingCEP2){oImgLoadingCEP2.style.display="none";}
//remove elementos
var oFCCartTotalCalc=document.getElementById("FCCartTotalCalc");
if(oFCCartTotalCalc){oFCCartTotalCalc.parentNode.removeChild(oFCCartTotalCalc);}
var oFCCartSmallTotalPrice=document.getElementById("FCCartSmallTotalPrice");
if(oFCCartSmallTotalPrice){oFCCartSmallTotalPrice.parentNode.removeChild(oFCCartSmallTotalPrice);}
//exibe total com frete
var iValFrete=OptValue.replace("R$ ","").replace(",",".");
var iTotalCesta=parseFloat(iValorCesta)+parseFloat(iValFrete);
//insere totais na tabela principal
var oLocalInsert=document.getElementById("FCCartWrapTotal"); //se tem embalagem, tenta usar esta posição primeiro
if(!oLocalInsert)oLocalInsert=document.getElementById("FCCartSubtotalPrice");
if(!oLocalInsert)oLocalInsert=document.getElementById("FCCartSubtotals");
if(oLocalInsert){
var oNewElement=document.createElement("tr");
oNewElement.setAttribute("id","FCCartTotalCalc");
oNewElement.setAttribute("class","not-on-small");
if(document.getElementById("idColPesoFC"))var sColspan=" colspan=2"; else var sColspan="";
oNewElement.innerHTML="<td colspan=3 align=right><b>Total:</b></td><td align=right"+ sColspan +"><b>"+ FormatPrice(iTotalCesta,FC$.Currency) +"</b></td>";
fnInsertAfter(oNewElement,oLocalInsert);
}
//insere totais na tabela small
var oLocalInsert=document.getElementById("FCCartSmallWrapTotal");
if(!oLocalInsert)oLocalInsert=document.getElementById("FCCartSmallSubtotalPrice");
if(!oLocalInsert)oLocalInsert=document.getElementById("FCCartSmallSubtotals");
if(oLocalInsert){
var oNewElement=document.createElement("div");
oNewElement.setAttribute("id","FCCartSmallTotalPrice");
oNewElement.innerHTML="<ul><li class='FCCartSubtotalPriceLabel'>Total:</li><li class='FCCartSubtotalPriceValue'><b>"+ FormatPrice(iTotalCesta,FC$.Currency) +"</b></li></ul>";
fnInsertAfter(oNewElement,oLocalInsert);
}
}
function fnInsertAfter(newNode, referenceNode) {
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
// ############# Cálculo de frete na cesta #######################
