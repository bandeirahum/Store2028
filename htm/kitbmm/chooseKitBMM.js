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
	$("#checkBase, #checkCor, #checkIndisponivel").css("display", "none");
	
	//Boxes ocultos
	$("#proxBase, #proxCor, .fotosPrev").css("display", "none");
	
	//Escolher Base
		
	$("#base02").click(function() {
		$("#checkBase").css("display", "block").css("top", "20px").css("left", "205px");
		base = "b02";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base03").click(function() {
		$("#checkBase").css("display", "block").css("top", "145px").css("left", "205px");
		base = "b03";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base04").click(function() {
		$("#checkBase").css("display", "block").css("top", "265px").css("left", "205px");
		base = "b04";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base05").click(function() {
		$("#checkBase").css("display", "block").css("top", "390px").css("left", "205px");
		base = "b05";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base06").click(function() {
		$("#checkBase").css("display", "block").css("top", "512px").css("left", "205px");
		base = "b06";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	
	//Escolher Cor
	$("#cor01").click(function() {
		$("#checkCor").css("display", "block").css("top", "10px").css("left", "80px");
		cor = "cerejeira";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor02").click(function() {
		$("#checkCor").css("display", "block").css("top", "10px").css("left", "165px");
		cor = "jacaranda";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor03").click(function() {
		$("#checkCor").css("display", "block").css("top", "10px").css("left", "250px");
		cor = "mogno";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	
	//Escolher depois de monstrado o preview
	$(".baseM, .corBase").click(function() {
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
		if(base == "b02" && cor == "cerejeira"){
			$(".imgBase").attr("src","../images/bmm2cerejeira.jpg");
		
		}
		else if(base == "b02" && cor == "jacaranda"){
			$(".imgBase").attr("src","../images/bmm2jacaranda.jpg");
			
		}
		else if(base == "b02" && cor == "mogno"){
			$(".imgBase").attr("src","../images/bmm2mogno.jpg");
			
		}
		else if(base == "b03" && cor == "cerejeira"){
			$(".imgBase").attr("src", "../images/bmm3cerejeira.jpg");
			
		}
		else if(base == "b03" && cor == "jacaranda"){
			$(".imgBase").attr("src", "../images/bmm3jacaranda.jpg");
			
		}
		else if(base == "b03" && cor == "mogno"){
			$(".imgBase").attr("src","../images/bmm3mogno.jpg");
			
		}
		else if(base == "b04" && cor == "cerejeira"){
			$(".imgBase").attr("src", "../images/bmm4cerejeira.jpg");
			
		}
		else if(base == "b04" && cor == "jacaranda"){
			$(".imgBase").attr("src", "../images/bmm4jacaranda.jpg");
			
		}
		else if(base == "b04" && cor == "mogno"){
			$(".imgBase").attr("src", "../images/bmm4mogno.jpg");
		
		}
		else if(base == "b05" && cor == "cerejeira"){
			$(".imgBase").attr("src", "../images/bmm5cerejeira.jpg");
			
		}
		else if(base == "b05" && cor == "jacaranda"){
			$(".imgBase").attr("src", "../images/bmm5jacaranda.jpg");
			
		}
		else if(base == "b05" && cor == "mogno"){
			$(".imgBase").attr("src", "../images/bmm5mogno.jpg");
			
		}
		else if(base == "b06" && cor == "cerejeira"){
			$(".imgBase").attr("src", "../images/bmm6cerejeira.jpg");
			
		}
		else if(base == "b06" && cor == "jacaranda"){
			$(".imgBase").attr("src", "../images/bmm6jacaranda.jpg");
			
		}
		else if(base == "b06" && cor == "mogno"){
			$(".imgBase").attr("src", "../images/bmm6mogno.jpg");
			
		}
				
				
		else {
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/prevElse.png");
			$(".imgMastro").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/prevBuy.png");
		}
		
		
		
		
	}
	
	function linkProd($) {		
		//Links para os produtos
		if(base == "b02" && cor == "mogno"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632859");
		}
				
		else if(base == "b02" && cor == "cerejeira"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865615");
		}
		else if(base == "b02" && cor == "jacaranda"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632898");
		}
		
		
		
		else if(base == "b03" && cor == "mogno"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412548");
		}
		else if(base == "b03" && cor == "cerejeira"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3865623");
		}
		else if(base == "b03" && cor == "jacaranda"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412570");
		}	
			
		else if(base == "b04" && cor == "mogno"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412550");
		}
		else if(base == "b04" && cor == "cerejeira"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3866066");
		}
		else if(base == "b04" && cor == "imbuia"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412542");
		}
		
		else if(base == "b05" && cor == "mogno"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412552");
		}
		else if(base == "b05" && cor == "cerejeira"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3866065" );
		}
		else if(base == "b05" && cor == "jacaranda"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=4697819");
		}
		
		else if(base == "b06" && cor == "cerejeira"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=4697819");
		}
		else if(base == "b06" && cor == "jacaranda"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=4697819");
		}
		else if(base == "b06" && cor == "mogno"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=4697819");
		}
		
	}
	
	$("#proxMontar").click(function() {
		if(base != "nada" && cor != "nada"){
			previewKit($);
		}
		else if(base == "nada" && cor != "nada"){
			piscarT1($);
		}
		else if(base != "nada" && cor == "nada"){
			piscarT2($);
		}
		else if(base != "nada" && cor != "nada"){
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada"){
			piscarT1($);
			piscarT2($);
		}
		else if(base == "nada" && cor != "nada"){
			piscarT1($);
			piscarT3($);
		}
		else if(base != "nada" && cor == "nada"){
			piscarT2($);
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada"){
			piscarT1($);
			piscarT2($);
			piscarT3($);
		}
		
	});
	
	$(".linkProd").click(function() {
		if(base != "nada" && cor != "nada" && slidePrev == true){
			linkProd($);
		}
		if(base != "nada" && cor != "nada" && slidePrev == false){
			$("#proxMontar").fadeOut(function() {
			$(this).fadeIn();
			});
		}
		else if(base == "nada" && cor != "nada"){
			piscarT1($);
		}
		else if(base != "nada" && cor == "nada"){
			piscarT2($);
		}
		else if(base != "nada" && cor != "nada"){
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada"){
			piscarT1($);
			piscarT2($);
		}
		else if(base == "nada" && cor != "nada"){
			piscarT1($);
			piscarT3($);
		}
		else if(base != "nada" && cor == "nada"){
			piscarT2($);
			piscarT3($);
		}
		else if(base == "nada" && cor == "nada"){
			piscarT1($);
			piscarT2($);
			piscarT3($);
		}
	});
});
