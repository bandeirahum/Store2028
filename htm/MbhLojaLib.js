var sPag=document.location.href.toUpperCase();function VerTexto(oNome){if(oNome.Texto.value==''||oNome.Texto.value.length<2){alert('Busca inv�lida.');oNome.Texto.focus();return false;}else{return true;}}function MostraEconomia(PrecoProd,PrecoOri){if(PrecoProd!=PrecoOri)document.write("<br><font color=#6f9e45>Economize <b>"+FormatPrice(PrecoOri-PrecoProd,'R$')+"</b> ("+FormatNum(((PrecoOri-PrecoProd)/PrecoOri)*100)+"%)</font>");}function FormatNum(num){num=num.toString().replace(/\$|\,/g,'');if(isNaN(num))num="0";sign=(num==(num=Math.abs(num)));num=Math.floor(num*100+0.50000000001);num=Math.floor(num/100).toString();for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));return((sign)?'':'-')+num;}function AjustaFiltros(){var bTemPathQts=false;var oUlPathCatQt=document.getElementById("idUlPathCatQtFC");if(oUlPathCatQt){bTemPathQts=true;}else{document.getElementById('idListaProdCategoriasFC').style.display='none';}var oUlAdic1Qt=document.getElementById("idUlAdic1QtFC");if(oUlAdic1Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional1FC').style.display='none';}var oUlAdic2Qt=document.getElementById("idUlAdic2QtFC");if(oUlAdic2Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional2FC').style.display='none';}var oUlAdic3Qt=document.getElementById("idUlAdic3QtFC");if(oUlAdic3Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional3FC').style.display='none';}if(!bTemPathQts)document.getElementById("idDivPath").style.display='none';var oUlPathSearch=document.getElementById("idUlPathSearchFC");if(oUlPathSearch==null)document.getElementById("idDivSearch").style.display='none';}function GetShippingValues(IDZip,IDProd){sCEP=document.getElementById("idZip"+IDZip).value;if(sCEP==""){alert("Informe o CEP");return;}else if(IDProd)var sParamProd="&idproduto="+IDProd;else var sParamProd="";AjaxExecFC("/XMLShippingCEP.asp","IDLoja="+IDLojaNum+"&cep="+sCEP+sParamProd,false,processXMLCEP,IDZip);}function processXMLCEP(obj,IDProd){var iErr=ReadXMLNode(obj,"err");if(iErr==null)return;if(iErr!="0"){alert(ReadXMLNode(obj,"msg"));return;}oShippingValues=document.getElementById("idShippingValues"+IDProd);oShippingValues.innerHTML="";var UseCart=ReadXMLNode(obj,"UseCart");if(UseCart=="False"){var ProdName=ReadXMLNode(obj,"ProdName");var ProdRef=ReadXMLNode(obj,"ProdRef");}var iOpt=ReadXMLNode(obj,"OptQt");var OptName=ReadXMLNode(obj,"Opt1Name");var OptValue=ReadXMLNode(obj,"Opt1Value");var OptImage=ReadXMLNode(obj,"Opt1Image");var OptObs=ReadXMLNode(obj,"Opt1Obs");if(OptImage==null)oShippingValues.innerHTML+="<table width='100%'><tr><td class='ZipName'>"+OptName+"</td></tr><tr><td class='ZipObsVal'>"+OptObs+"</td></tr><tr><td class='ZipValue'>"+OptValue+"</td></tr></table>";else oShippingValues.innerHTML+="<table width='100%'><tr><td width='60'><img src='"+OptImage+"'></td></tr><tr><td class='ZipObsVal'>"+OptObs+"</td></tr><tr><td class='ZipValue'>"+OptValue+"</td></tr></table>";oShippingValues.style.display="block";}function MostraMaxParcela(PrecoProd,MaxParcelas){var ComSem;if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;if(Juros[MaxParcelas-1]>0)ComSem="";else ComSem="<font color='#990000'>&nbsp;sem&nbsp;juros</font>";document.write("ou&nbsp;<b>"+MaxParcelas+"x</b>"+ComSem+" de&nbsp;<b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b>");}function MostraParcelas(PrecoProd,MaxParcelas){var ComSem,EstiloLinha;if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;document.write("<br><table width='350' cellspacing='1' cellpadding='3' bgcolor='#D8D7C9'><tr bgcolor='#DBDACD'><td colspan='3' height='22' class='TitTabParc' align='center'><b>Op��es de parcelamento</td></tr><tr bgcolor='#E6E4E4'><td class='TitTabParc'>N�mero&nbsp;de<br>parcelas</td><td align='right' class='TitTabParc'>Valor&nbsp;de<br>cada&nbsp;parcela</td><td align='right' class='TitTabParc'>Valor&nbsp;total<br>parcelado</td></tr>");for(var i=0;i<MaxParcelas;i++){if(Juros[i]>0)ComSem="com juros";else ComSem="<font color='#990000'>sem&nbsp;juros</font>";if((i%2)==0)EstiloLinha='EstParcPar';else EstiloLinha='EstParcImpar';document.write("<tr class="+EstiloLinha+"><td class="+EstiloLinha+">"+(i+1)+"x "+ComSem+"</td><td class="+EstiloLinha+" align='right'>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,i+1))+"</td><td class="+EstiloLinha+" align='right'>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,i+1)*(i+1))+"</td></tr>");}document.write("</table><br />");}