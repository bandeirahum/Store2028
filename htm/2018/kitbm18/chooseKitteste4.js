$(document).ready(function() {
	
	//Variáveis
	var slidePrev = false;
	var base = "nada";
	var cor = "nada";
	var ponteira = "nada";
	var redT1 = false;
	var redT2 = false;
	var redT3 = false;
	
	//Checkbox
	$("#checkBase, #checkCor, #checkPont").css("display", "none");
	
	//Boxes ocultos
	$("#proxBase, #proxCor, .fotosPrev").css("display", "none");
	
	//Escolher Base
	$("#base01").click(function() {
		$("#checkBase").css("display", "block").css("top", "72px").css("left", "75px");
		base = "b01";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base02").click(function() {
		$("#checkBase").css("display", "block").css("top", "72px").css("left", "180px");
		base = "b02";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base03").click(function() {
		$("#checkBase").css("display", "block").css("top", "72px").css("left", "305px");
		base = "b03";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base04").click(function() {
		$("#checkBase").css("display", "block").css("top", "72px").css("left", "450px");
		base = "b04";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base05").click(function() {
		$("#checkBase").css("display", "block").css("top", "72px").css("left", "630px");
		base = "b05";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base06").click(function() {
		$("#checkBase").css("display", "block").css("top", "72px").css("left", "780px");
		base = "b06";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base07").click(function() {
		$("#checkBase").css("display", "block").css("top", "225px").css("left", "90px");
		base = "b07";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base08").click(function() {
		$("#checkBase").css("display", "block").css("top", "225px").css("left", "240px");
		base = "b08";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base09").click(function() {
		$("#checkBase").css("display", "block").css("top", "225px").css("left", "390px");
		base = "b09";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base10").click(function() {
		$("#checkBase").css("display", "block").css("top", "225px").css("left", "585px");
		base = "b10";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base11").click(function() {
		$("#checkBase").css("display", "block").css("top", "225px").css("left", "770px");
		base = "b11";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	//Escolher Cor
	$("#cor01").click(function() {
		$("#checkCor").css("display", "block").css("top", "65px").css("left", "120px");
		cor = "cerejeira";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor02").click(function() {
		$("#checkCor").css("display", "block").css("top", "65px").css("left", "215px");
		cor = "imbuia";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor03").click(function() {
		$("#checkCor").css("display", "block").css("top", "65px").css("left", "305px");
		cor = "jacaranda";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor04").click(function() {
		$("#checkCor").css("display", "block").css("top", "160px").css("left", "116px");
		cor = "mogno";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor05").click(function() {
		$("#checkCor").css("display", "block").css("top", "160px").css("left", "210px");
		cor = "cinza";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor06").click(function() {
		$("#checkCor").css("display", "block").css("top", "160px").css("left", "302px");
		cor = "preto";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	
	//Escolhe Ponteira
	$("#lanca").click(function() {
		$("#checkPont").css("display", "block").css("top", "115px").css("left", "255px");
		ponteira = "lanca";
		if(redT3 == true){
			$("#tit3").removeAttr("style");
		}
	});
	$("#bola").click(function() {
		$("#checkPont").css("display", "block").css("top", "115px").css("left", "85px");
		ponteira = "bola";
		if(redT3 == true){
			$("#tit3").removeAttr("style");
		}
	});
	
	//Escolher depois de monstrado o preview
	$(".baseM, .corBase, .ponteiras").click(function() {
		if(slidePrev == true){
			slidePrev = false;
			$(".fotosPrev").slideUp(400);			
		}
	});
	
	//Montar Kit
	function piscarT1($) {
		$("#tit1").css("color", "#f00");
		$("#grayBox01").fadeOut(function() {
		$(this).fadeIn();
		});
		redT1 = true;		
	}
	
	function piscarT2($) {
		$("#tit2").css("color", "#f00");
		$("#grayBox02").fadeOut(function() {
		$(this).fadeIn();
		});
		redT2 = true;
	}
	
	function piscarT3($) {
		$("#tit3").css("color", "#f00");
		$("#grayBox03").fadeOut(function() {
		$(this).fadeIn();
		});
		redT3 = true;
	}
	
	function previewKit($) {
		$(".fotosPrev").slideDown(400);
		slidePrev = true;
		
		//IMagens das bases
		if(base == "b01" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno1lanca.jpg");
		}
		else if(base == "b01" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia1lanca.jpg");
			
		}		
		else if(base == "b01" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira1lanca.jpg");
					
		}
		else if(base == "b01" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda1lanca.jpg");
			
		}
		
		else if(base == "b01" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza1lanca.jpg");
			
		}
		
		else if(base == "b01" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto1lanca.jpg");
			
		}
		
		else if(base == "b02" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira2lanca.jpg");
		
		}
		else if(base == "b02" && cor == "mogno"&& ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno2lanca.jpg");
			
		}
		else if(base == "b02" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia2lanca.jpg");
			
		}
		else if(base == "b02" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda2lanca.jpg");
			
		}
		else if(base == "b02" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza2lanca.jpg");
			
		}
		else if(base == "b02" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto2lanca.jpg");
			
		}
		else if(base == "b03" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira3lanca.jpg");
			
		}
		else if(base == "b03" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno3lanca.jpg");
			
		}
		else if(base == "b03" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia3lanca.jpg");
			
		}
		else if(base == "b03" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda3lanca.jpg");
			
		}
		else if(base == "b03" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza3lanca.jpg");
			
		}
		else if(base == "b03" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto3lanca.jpg");
			
		}
		else if(base == "b04" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira4lanca.jpg");
			
		}
		else if(base == "b04" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno4lanca.jpg");
			
		}
		else if(base == "b04" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia4lanca.jpg");
		
		}
		else if(base == "b04" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda4lanca.jpg");
			
		}
		else if(base == "b04" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza4lanca.jpg");
			
		}
		else if(base == "b04" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto4lanca.jpg");
			
		}
			else if(base == "b05" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira5lanca.jpg");
			
		}
		else if(base == "b05" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno5lanca.jpg");
			
		}
		else if(base == "b05" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia5lanca.jpg");
			
		}
		else if(base == "b05" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda5lanca.jpg");
			
		}
		else if(base == "b05" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza5lanca.jpg");
			
		}
		else if(base == "b05" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto5lanca.jpg");
			
		}
		else if(base == "b06" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		
		else if(base == "b06" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		
		else if(base == "b06" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b07" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira2lancamod.jpg");
			
		}
		else if(base == "b07" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda2lancamod.jpg");
			
		}
		else if(base == "b07" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno2lancamod.jpg");
			
		}
		else if(base == "b07" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia2lancamod.jpg");
			
		}
		else if(base == "b08" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira3lancamod.jpg");
			
		}
		else if(base == "b08" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda3lancamod.jpg");
			
		}
		else if(base == "b08" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia3lancamod.jpg");
			
		}
		else if(base == "b08" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno3lancamod.jpg");
          
       	}
      
      else if(base == "b08" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/3cinzamodL.jpg");
          
       	}
      
       else if(base == "b08" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/3pretomodL.jpg");
          
       	}
		else if(base == "b09" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira4lancamod.jpg");
			
		}
		else if(base == "b09" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia4lancamod.jpg");
			
		}
		else if(base == "b09" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda4lancamod.jpg");
			
		}
		else if(base == "b09" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno4lancamod.jpg");
			
		}
        else if(base == "b09" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/4pretomodL.jpg");
          
       	}
      else if(base == "b09" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/4cinzamodL.jpg");
          
       	}
		else if(base == "b10" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno5lancamod.jpg");
			
		}
		else if(base == "b10" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia5lancamod.jpg");
			
		}
		else if(base == "b10" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira5lancamod.jpg");
			
		}
		else if(base == "b10" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda5lancamod.jpg");
			
		}
       else if(base == "b10" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/5pretomodL.jpg");
          
       	}
      else if(base == "b10" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/5cinzamodL.jpg");
          
       	}
      
		else if(base == "b11" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda6lancamod.jpg");
			
		}
		else if(base == "b11" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia6lancamod.jpg") ("href", "");
		}
		else if(base == "b11" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno6lancamod.jpg") ("href", "");
		}
		else if(base == "b11" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira6lancamod.jpg") ("href", "");
		}
		 else if(base == "b11" && cor == "preto" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/6pretomodL.jpg");
          
       	}
      else if(base == "b11" && cor == "cinza" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/6cinzamodL.jpg");
          
       	}
		//Ponteira Bola
		
		else if(base == "b01" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno1bola.jpg");
		}
		else if(base == "b01" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia1bola.jpg");
			
		}		
		else if(base == "b01" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira1bola.jpg");
					
		}
		else if(base == "b01" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda1bola.jpg");
			
		}
		else if(base == "b01" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza1bola.jpg");
			
		}
		else if(base == "b01" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto1bola.jpg");
			
		}
		else if(base == "b02" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira2bola.jpg");
		
		}
		else if(base == "b02" && cor == "mogno"&& ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno2bola.jpg");
			
		}
		else if(base == "b02" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia2bola.jpg");
			
		}
		else if(base == "b02" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda2bola.jpg");
			
		}
		else if(base == "b02" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza2bola.jpg");
			
		}
		else if(base == "b02" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto2bola.jpg");
			
		}
		else if(base == "b03" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira3bola.jpg");
			
		}
		else if(base == "b03" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno3bola.jpg");
			
		}
		else if(base == "b03" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia3bola.jpg");
			
		}
		else if(base == "b03" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda3bola.jpg");
			
		}
		else if(base == "b03" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza3bola.jpg");
			
		}
		else if(base == "b03" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto3bola.jpg");
			
		}
		else if(base == "b04" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira4bola.jpg");
			
		}
		else if(base == "b04" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno4bola.jpg");
			
		}
		else if(base == "b04" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia4bola.jpg");
		
		}
		else if(base == "b04" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda4bola.jpg");
			
		}
		else if(base == "b04" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza4bola.jpg");
			
		}
		else if(base == "b04" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto4bola.jpg");
			
		}
			else if(base == "b05" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira5bola.jpg");
			
		}
		else if(base == "b05" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno5bola.jpg");
			
		}
		else if(base == "b05" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia5bola.jpg");
			
		}
		else if(base == "b05" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cinza5bola.jpg");
			
		}
		else if(base == "b05" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Preto5bola.jpg");
			
		}
		
		else if(base == "b06" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		
		else if(base == "b07" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira2bolamod.jpg");
			
		}
		else if(base == "b07" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda2bolamod.jpg") ("href","http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=3412582");
			
		}
		else if(base == "b07" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno2bolamod.jpg");
			
		}
		else if(base == "b07" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia2bolamod.jpg");
			
		}
		else if(base == "b07" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b07" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		
		else if(base == "b08" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira3bolamod.jpg");
			
		}
		else if(base == "b08" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda3bolamod.jpg");
			
		}
		else if(base == "b08" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia3bolamod.jpg");
			
		}
		else if(base == "b08" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno3bolamod.jpg");
			
		}
		else if(base == "b08" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/3cinzamodB.jpg");
			
		}
		else if(base == "b08" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/3pretomodB.jpg");
			
		}
		
		else if(base == "b09" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira4bolamod.jpg");
			
		}
		else if(base == "b09" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia4bolamod.jpg");
			
		}
		else if(base == "b09" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda4bolamod.jpg");
			
		}
		else if(base == "b09" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno4bolamod.jpg");
			
		}
		
		else if(base == "b09" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/4cinzamodB.jpg");
			
		}
		else if(base == "b09" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/4pretomodB.jpg");
			
		}
		
		else if(base == "b10" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno5bolamod.jpg");
			
		}
		else if(base == "b10" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia5bolamod.jpg");
			
		}
		else if(base == "b10" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira5bolamod.jpg");
			
		}
		else if(base == "b10" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda5bolamod.jpg");
			
		}
		
		else if(base == "b10" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/5cinzamodB.jpg");
			
		}
		else if(base == "b10" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/5pretomodB.jpg");
			
		}
		
		else if(base == "b11" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Jacaranda6bolamod.jpg");
			
		}
		else if(base == "b11" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Imbuia6bolamod.jpg");
		}
		else if(base == "b11" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Mogno6bolamod.jpg");
		}
		else if(base == "b11" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/images/kitbm2014/Cerejeira6bolamod.jpg");
		}
		
		else if(base == "b11" && cor == "cinza" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/6cinzamodB.jpg");
			
		}
		else if(base == "b11" && cor == "preto" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/kitbm/6pretomodB.jpg");
			
		}
		
		else {
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/prevElse.png");
			$(".imgMastro").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/prevBuy.png");
		}
		
		
		
		
		
		
		//Imagens dos Mastros
		if(ponteira == "lanca"){
			$(".imgMastro").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/mastroLanca.png");
			$("#ponteira").text("Lança");
		}
		else if(ponteira == "bola"){
			$(".imgMastro").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/mastroBola.png");
			$("#ponteira").text("Bola");
		}
		else {
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/prevElse.png");
			$(".imgMastro").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/prevBuy.png");
		}
	}
	
	function linkProd($) {		
		//Links para os produtos
		if(base == "b01" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632830");
		}
		else if(base == "b01" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632841");
		}
		
		
		else if(base == "b01" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865589");
			
		}
		else if(base == "b01" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865381");
			
		}
		
		
		
		
		else if(base == "b01" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632845");
		}
		else if(base == "b01" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632849");
		}
		
		
		else if(base == "b01" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632852");
		}
		else if(base == "b01" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632911");
		}
		
		else if(base == "b01" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172068");
		}
		else if(base == "b01" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172094");
		}
		
		else if(base == "b01" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172078");
		}
		else if(base == "b01" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172101");
		}
		
		
		else if(base == "b02" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632859");
		}
		else if(base == "b02" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632863");
		}
		
		
		
		
		else if(base == "b02" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865615");
		}
		else if(base == "b02" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865447");
		}
		
		
		
				
		
		else if(base == "b02" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632892");
		}
		else if(base == "b02" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632894");
		}
		
		
		else if(base == "b02" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632898");
		}
		else if(base == "b02" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632902");
		}
		
		else if(base == "b02" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632898");
		}
		else if(base == "b02" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632902");
		}
		
		else if(base == "b02" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172110");
		}
		else if(base == "b02" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172106");
		}
		
		else if(base == "b02" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172130");
		}
		else if(base == "b02" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172248");
		}
		
		
		
		else if(base == "b03" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412548");
		}
		else if(base == "b03" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412557");
		}
		
		
		
		else if(base == "b03" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865623");
		}
		else if(base == "b03" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865451");
		}
		
		
		
		
		
		else if(base == "b03" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412099");
		}
		else if(base == "b03" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412142");
		}
		
		
		else if(base == "b03" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412570");
		}
		else if(base == "b03" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412577");
		}
		
		else if(base == "b03" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185036");
		}
		else if(base == "b03" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185033");
		}
		
		else if(base == "b03" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172274");
		}
		else if(base == "b03" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6172254");
		}
		
		
		
		else if(base == "b04" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412550");
		}
		else if(base == "b04" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412561");
		}
		
		
		else if(base == "b04" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3866066");
		}
		else if(base == "b04" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href",  "ListaProdutos.asp?IDLoja=2028&IDProduto=3865509" );
		}
		
		
		
		
		
		else if(base == "b04" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412116");
		}
		else if(base == "b04" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412542");
		}
		
		
		else if(base == "b04" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412571");
		}
		else if(base == "b04" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412580");
		}
		
		else if(base == "b04" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185037");
		}
		else if(base == "b04" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185034");
		}
		
		else if(base == "b04" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185066");
		}
		else if(base == "b04" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185063");
		}
		
		
		
		else if(base == "b05" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412552");
		}
		else if(base == "b05" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412563");
			
		}
		
		
		
		else if(base == "b05" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3866065" );
		}
		else if(base == "b05" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865558" );
		}
		
		
		
		else if(base == "b05" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412128");
		}
		else if(base == "b05" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412543");
		}
		
		
		else if(base == "b05" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412574");
		}
		else if(base == "b05" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412582");
		}
		
		else if(base == "b05" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185038");
		}
		else if(base == "b05" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185035");
		}
		
		else if(base == "b05" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185067");
		}
		else if(base == "b05" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185065");
		}
		
		else if(base == "b06" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185038");
		}
		else if(base == "b06" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185035");
		}
		
		else if(base == "b06" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185067");
		}
		else if(base == "b06" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=6185065");
		}
		
		//Bases Modular
		
		else if(base == "b07" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720699");
		}
		
		else if(base == "b07" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720701");
		}
		
		else if(base == "b07" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720672");
		}
		
		else if(base == "b07" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720674");
		}
		
		else if(base == "b07" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720682");
		}
		
		else if(base == "b07" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720695");
		}
		else if(base == "b07" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720742");
		}
		
		else if(base == "b07" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720745");
		}
      
		
		else if(base == "b08" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720640");
		}
		
		else if(base == "b08" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720650");
		}
		
		else if(base == "b08" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720606");
		}
		
		else if(base == "b08" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720609");
		}
		
		else if(base == "b08" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720613");
		}
		
		else if(base == "b08" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720629");
		}
		
		else if(base == "b08" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720599");
		}
		
		else if(base == "b08" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720604");
		}
      
      else if(base == "b08" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6254845");
		}
		
		else if(base == "b08" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6254846");
		}
      
      else if(base == "b08" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6254841");
		}
		
		else if(base == "b08" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6254843");
		}
		
		else if(base == "b09" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720581");
		}
		
		else if(base == "b09" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720586");
		}
		
		else if(base == "b09" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719923");
		}
		
		else if(base == "b09" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720690");
		}
		
		else if(base == "b09" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720577");
		}
		
		else if(base == "b09" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720579");
		}
		
		else if(base == "b09" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719909");
		}
		
		else if(base == "b09" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719915");
		}
      
      else if(base == "b09" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6260130");
		}
		
		else if(base == "b09" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6265604");
		}
      
      else if(base == "b09" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6254912");
		}
		
		else if(base == "b09" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6259861");
		}
		
		else if(base == "b10" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719872");
		}
		
		else if(base == "b10" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719863");
		}
		
		else if(base == "b10" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719844");
		}
		
		else if(base == "b10" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719856");
		}
		
		else if(base == "b10" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719883");
		}
		
		else if(base == "b10" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719896");
		}
		
		else if(base == "b10" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719834");
		}
		
		else if(base == "b10" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719838");
		}
      
      else if(base == "b10" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6260138");
		}
		
		else if(base == "b10" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6260139");
		}
      
      else if(base == "b10" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6259863");
		}
		
		else if(base == "b10" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6259868");
		}
		
		else if(base == "b11" && cor == "cerejeira" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719798");
		}
		
		else if(base == "b11" && cor == "cerejeira" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719264");
		}
		
		else if(base == "b11" && cor == "imbuia" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719808");
		}
		
		else if(base == "b11" && cor == "imbuia" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719815");
		}
		
		else if(base == "b11" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719826");
		}
		
		else if(base == "b11" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4719823");
		}
		
		else if(base == "b11" && cor == "jacaranda" && ponteira == "bola"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto= 4719274");
		}
		
		else if(base == "b11" && cor == "jacaranda" && ponteira == "lanca"){
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4697819");
		}
		
		else if(base == "b11" && cor == "cinza" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6259937");
		}
		
		else if(base == "b11" && cor == "cinza" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6259936");
		}
      
      else if(base == "b11" && cor == "preto" && ponteira == "lanca"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6260144");
		}
		
		else if(base == "b11" && cor == "preto" && ponteira == "bola"){
			$(".linkProd").attr("href", "https://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=6260147");
		}
	}
	
	$("#proxMontar").click(function() {
		if(base != "nada" && cor != "nada" && ponteira != "nada"){
			previewKit($);
		}
		else if(base == "nada" && cor != "nada" && ponteira != "nada"){
			piscarT1($);
		}
		else if(base != "nada" && cor == "nada" && ponteira != "nada"){
			piscarT2($);
		}
		else if(base != "nada" && cor != "nada" && ponteira == "nada"){
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada" && ponteira != "nada"){
			piscarT1($);
			piscarT2($);
		}
		else if(base == "nada" && cor != "nada" && ponteira == "nada"){
			piscarT1($);
			piscarT3($);
		}
		else if(base != "nada" && cor == "nada" && ponteira == "nada"){
			piscarT2($);
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada" && ponteira == "nada"){
			piscarT1($);
			piscarT2($);
			piscarT3($);
		}
		
	});
	
	$(".linkProd").click(function() {
		if(base != "nada" && cor != "nada" && ponteira != "nada" && slidePrev == true){
			linkProd($);
		}
		if(base != "nada" && cor != "nada" && ponteira != "nada" && slidePrev == false){
			$("#proxMontar").fadeOut(function() {
			$(this).fadeIn();
			});
		}
		else if(base == "nada" && cor != "nada" && ponteira != "nada"){
			piscarT1($);
		}
		else if(base != "nada" && cor == "nada" && ponteira != "nada"){
			piscarT2($);
		}
		else if(base != "nada" && cor != "nada" && ponteira == "nada"){
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada" && ponteira != "nada"){
			piscarT1($);
			piscarT2($);
		}
		else if(base == "nada" && cor != "nada" && ponteira == "nada"){
			piscarT1($);
			piscarT3($);
		}
		else if(base != "nada" && cor == "nada" && ponteira == "nada"){
			piscarT2($);
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada" && ponteira == "nada"){
			piscarT1($);
			piscarT2($);
			piscarT3($);
		}
	});
});
