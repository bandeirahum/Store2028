// JavaScript Document

$(document).ready(function() {
	//preview resetado
	$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevDef.html');
	
	//Variáveis
	var modelo = "nada";
	var cor = "nada";
	var prev = "nada";
	var slideCor = false;
	var slidePrev = true;
	
	//Escolher Cor
	function zerarCorBMM ($) {
		$("#CorBMM01").attr('src','images/cor01.jpg');
		$("#CorBMM02").attr('src','images/cor02.jpg');
		$("#CorBMM03").attr('src','images/cor03.jpg');
		
		
	}
	$("#modelo01").click(function() {
		modelo = "FXT20";
		colec = "FXT";
		$(document).ready(function() {
		zerarModelos($);
		});
		$("#modelo01").attr('src','../../../Home 2015/Base + Mastro Madeira/HTML/images/cor01c.jpg');
	});	
	$("#CorBMM02").click(function() {
		modelo = "JAC";
		colec = "JAC";
		$(document).ready(function() {
		zerarCorBMM($);
		});
		$("#CorBMM02").attr('src','images/cor02c.jpg');
	});	
	$("#CorBMM03").click(function() {
		modelo = "MOG";
		colec = "MOG";
		$(document).ready(function() {
		zerarCorBMM($);
		});
		$("#CorBMM03").attr('src','images/cor03c.jpg');
	});	
	
	//Animação slide cor		
	$("#nextCor").click(function() {
		if(cor == "CER"){
			slideModelo = true;
			$("#modelosBMM_CER").slideDown(400);
			$('#framePrev').hide('fast');
			slidePrev = false;			
		}
		else if(cor == "JAC"){
			slideCor = true;
			$("#modelosBMM_JAC").slideDown(400);
			$('#framePrev').hide('fast');
			slidePrev = false;			
		}
		else if(cor == "MOG"){
			slideCor = true;
			$("#modelosBMM_MOG").slideDown(400);
			$('#framePrev').hide('fast');
			slidePrev = false;			
		}
		
		else {
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevELSE.html');
			$("#framePrev").show('fast');
		}
	});
	
	
	//Escolher modelo de novo
	function novoModelo ($) {
		if(slideCor == true && slidePrev == false){
			$(".terceiroPasso").slideUp(400);
			cor = "nada";
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevDef.html');
			$("#framePrev").show('fast');
			slideCor = false;
			slidePrev = true;
			
			$("#CorBMM01").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/001923.png');
			$("#CorBMM02").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/001423.png');
			$("#CorBMM03").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/001911.png');
			
			
				
		}
		else if(slideCor == true && slidePrev == true){
			$(".terceiroPasso").slideUp(400);
			cor = "nada";
			$("#framePrev").hide('fast');
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevDef.html');
			$("#framePrev").show('fast');
			slideCor = false;
			slidePrev = true;
			
			$("#CorBMM01").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/001923.png');
			$("#CorBMM02").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/001423.png');
			$("#CorBMM03").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/001911.png');
						
		}
	}
	$(".CorBMM").click(function(){
		$(document).ready(function() {
		novoModelo($);
		});		
	});
	
			
	//Escolher Modelo	
	//Cerejeira
	function zerarModCer ($) {
		$("#cor02").attr('src','images/cere02.jpg');
		$("#cor03").attr('src','images/cere03.jpg');
		$("#cor04").attr('src','images/cere04.jpg');
		$("#cor05").attr('src','images/cere05.jpg');
		$("#cor06").attr('src','images/cere06.jpg');
		
		if(slidePrev == true){
			$('#framePrev').hide('fast');
			slidePrev = false;
		}
	}
		
	$("#cor02").click(function() {
		cor = "02";
		$(document).ready(function() {
		zerarCor02($);
		});
		$("#cor02").attr('src','images/cere2c.jpg');
	});
	$("#cor03").click(function() {
		cor = "03";
		$(document).ready(function() {
		zerarCor02($);
		});
		$("#cor03").attr('src','images/cere3c.jpg');
	});	
	$("#cor04").click(function() {
		cor = "04";
		$(document).ready(function() {
		zerarCor02($);
		});
		$("#cor04").attr('src','images/cere4c.jpg');
	});	
	$("#cor05").click(function() {
		cor = "05";
		$(document).ready(function() {
		zerarCor02($);
		});
		$("#cor05").attr('src','images/cere05c.jpg');
	});	
	$("#cor06").click(function() {
		cor = "06";
		$(document).ready(function() {
		zerarCor02($);
		});
		$("#cor06").attr('src','images/cere6c.jpg');
	});
	
	
	//Jacaranda
	function zerarModJac ($) {
		$("#cor12").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1900.png');
		$("#cor13").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1100.png');
		$("#cor14").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0100.png');
		$("#cor15").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/2300.png');
		$("#cor16").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1423.png');
		
		if(slidePrev == true){
			$('#framePrev').hide('fast');
			slidePrev = false;
		}
	}
		
	$("#cor12").click(function() {
		cor = "02";
		$(document).ready(function() {
		zerarCor03($);
		});
		$("#cor12").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1900c.png');
	});
	$("#cor13").click(function() {
		cor = "03";
		$(document).ready(function() {
		zerarCor03($);
		});
		$("#cor13").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1100c.png');
	});	
	$("#cor14").click(function() {
		cor = "04";
		$(document).ready(function() {
		zerarCor03($);
		});
		$("#cor14").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0100c.png');
	});	
	$("#cor15").click(function() {
		cor = "05";
		$(document).ready(function() {
		zerarCor03($);
		});
		$("#cor15").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/2300c.png');
	});	
	$("#cor16").click(function() {
		cor = "06";
		$(document).ready(function() {
		zerarCor03($);
		});
		$("#cor16").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1423c.png');
	});
	
	
	//Modelo Mogno
	function zerarModMog ($) {
		$("#cor22").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1100.png');
		$("#cor23").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1900.png');
		$("#cor24").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0100.png');
		$("#cor25").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0401.png');
		$("#cor26").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0023.png');
		
		if(slidePrev == true){
			$('#framePrev').hide('fast');
			slidePrev = false;
		}
	}
	
	$("#cor22").click(function() {
		cor = "02";
		$(document).ready(function() {
		zerarCor04($);
		});
		$("#cor22").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1100c.png');
	});
	$("#cor23").click(function() {
		cor = "03";
		$(document).ready(function() {
		zerarCor04($);
		});
		$("#cor23").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/1900c.png');
	});	
	$("#cor24").click(function() {
		cor = "04";
		$(document).ready(function() {
		zerarCor04($);
		});
		$("#cor24").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0100c.png');
	});	
	$("#cor25").click(function() {
		cor = "05";
		$(document).ready(function() {
		zerarCor04($);
		});
		$("#cor25").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0401c.png');
	});	
	$("#cor26").click(function() {
		cor = "06";
		$(document).ready(function() {
		zerarCor04($);
		});
		$("#cor26").attr('src','https://www.rumo.com.br/lojas/00020770/images/fardamentos/0023c.png');
	});
	
	
	//Preview
	//Cerejeira
	$('#nextMod_CER').click(function(){
		prev = cor + modelo;
		
		 if(prev == "CER02"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F20GV001423.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "CER03"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F20GV001911.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "CER04"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F20GV000123.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "CER05"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F20GV001901.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "CER06"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F20GV000104.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else {
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevELSE.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
	});
	
	//Jacaranda
	$('#nextCor_JAC').click(function(){
		prev = cor + modelo;
		
		if(prev == "JAC02"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F30GV1900.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "JAC03"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F30GV1100.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "JAC04"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F30GV0100.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "JAC05"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F30GV2300.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "JAC06"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F30GV1423.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else {
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevELSE.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
	});
	
	//Mogno
	$('#nextCor_MOG').click(function(){
		prev = cor + modelo;
		
		if(prev == "MOG02"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F40GV1100.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "MOG03"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F40GV1900.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "MOG04"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F40GV0100.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "MOG05"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F40GV0401.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if(prev == "MOG06"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/F40GV0023.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else {
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevELSE.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
								
	});
	
	//Botão comprar
	$("#buyBot").click(function() {
		prev = modelo + cor;
		
		//Cerejeira
		if(prev == "CER02" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324228"
		}
		else if(prev == "CER03" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324229"
		}
		else if(prev == "CER04" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324230"
		}
		else if(prev == "CER05" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324231"
		}
		else if(prev == "CER06" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324232"
		}
		
		
		//jACARANDA
		else if(prev == "JAC02" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324840"
		}
		else if(prev == "JAC03" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324841"
		}
		else if(prev == "JAC04" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324842"
		}
		else if(prev == "JAC05" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324843"
		}
		else if(prev == "JAC06" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3324844"
		}
		
		
		//MOGNO
		else if(prev == "MOG02" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3325873"
		}
		else if(prev == "MOG03" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3325874"
		}
		else if(prev == "MOG04" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3325875"
		}
		else if(prev == "MOG05" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3325876"
		}
		else if(prev == "MOG06" && slidePrev == true){
			document.getElementById("buyBot").href="listaprodutos.asp?idloja=20770&idproduto=3325877"
		}
		
				
		//Sem modelo
		else if (modelo == "nada"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevBuy.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if (modelo != "nada" && cor == "nada"){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevBuy.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else if (modelo != "nada" && cor != "nada" && slidePrev == false){
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevELSEBuy.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
		else {
			$("#framePrev").attr('src','https://www.rumo.com.br/lojas/00020770/htm/fardas/prevs/prevBUY.html');
			$("#framePrev").show('fast');
			slidePrev = true;
		}
	});		
});