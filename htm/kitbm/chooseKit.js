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
		$("#checkBase").css("display", "block").css("top", "35px").css("left", "65px");
		base = "b01";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base02").click(function() {
		$("#checkBase").css("display", "block").css("top", "35px").css("left", "200px");
		base = "b02";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base03").click(function() {
		$("#checkBase").css("display", "block").css("top", "35px").css("left", "345px");
		base = "b03";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base04").click(function() {
		$("#checkBase").css("display", "block").css("top", "35px").css("left", "510px");
		base = "b04";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base05").click(function() {
		$("#checkBase").css("display", "block").css("top", "35px").css("left", "690px");
		base = "b05";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	
	//Escolher Cor
	$("#cor01").click(function() {
		$("#checkCor").css("display", "block").css("top", "35px").css("left", "69px");
		cor = "mogno";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor02").click(function() {
		$("#checkCor").css("display", "block").css("top", "35px").css("left", "160px");
		cor = "imbuia";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor03").click(function() {
		$("#checkCor").css("display", "block").css("top", "35px").css("left", "251px");
		cor = "jacaranda";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	
	
	
		$("#cor04").click(function() {
		$("#checkCor").css("display", "block").css("top", "35px").css("left", "342px");
		cor = "cerejeira";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	
	
	//Escolhe Ponteira
	$("#lanca").click(function() {
		$("#checkPont").css("display", "block").css("top", "35px").css("left", "135px");
		ponteira = "lanca";
		if(redT3 == true){
			$("#tit3").removeAttr("style");
		}
	});
	$("#bola").click(function() {
		$("#checkPont").css("display", "block").css("top", "35px").css("left", "255px");
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
		if(base == "b01" && cor == "mogno"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/01mogno.png");
			$("#cor").text("Mogno");
			$("#numero").text("01 Mastro");
			$("#quant").text("x1");
		}
		else if(base == "b01" && cor == "imbuia"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/01imbuia.png");
			$("#cor").text("Imbuia");
			$("#numero").text("01 Mastro");
			$("#quant").text("x1");
		}
		
		//item add falta alterar img
		else if(base == "b01" && cor == "cerejeira"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/01cerejeira.png");
			$("#cor").text("cerejeira");
			$("#numero").text("01 Mastro");
			$("#quant").text("x1");
		
		}
		
		else if(base == "b02" && cor == "cerejeira"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/02cerejeira.png");
			$("#cor").text("cerejeira");
			$("#numero").text("02 Mastro");
			$("#quant").text("x2");
		}
			else if(base == "b03" && cor == "cerejeira"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/03cerejeira.png");
			$("#cor").text("cerejeira");
			$("#numero").text("03 Mastro");
			
			$("#quant").text("x3");
		}
			else if(base == "b04" && cor == "cerejeira"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/04cerejeira.png");
			$("#cor").text("cerejeira");
			$("#numero").text("04 Mastro");
			$("#quant").text("x4");
		}
			else if(base == "b05" && cor == "cerejeira"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/05cerejeira.png");
			$("#cor").text("cerejeira");
			$("#numero").text("05 Mastro");
			$("#quant").text("x5");
			
			
			
		}
		else if(base == "b01" && cor == "jacaranda"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/01jacaranda.png");
			$("#cor").text("Jacarandá");
			$("#numero").text("01 Mastro");
			$("#quant").text("x1");
		}
		else if(base == "b02" && cor == "mogno"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/02mogno.png");
			$("#cor").text("Mogno");
			$("#numero").text("02 Mastros");
			$("#quant").text("x2");
		}
		else if(base == "b02" && cor == "imbuia"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/02imbuia.png");
			$("#cor").text("Imbuia");
			$("#numero").text("02 Mastros");
			$("#quant").text("x2");
		}
		else if(base == "b02" && cor == "jacaranda"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/02jacaranda.png");
			$("#cor").text("Jacarandá");
			$("#numero").text("02 Mastros");
			$("#quant").text("x2");
		}
		else if(base == "b03" && cor == "mogno"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/03mogno.png");
			$("#cor").text("Mogno");
			$("#numero").text("03 Mastros");
			$("#quant").text("x3");
		}
		else if(base == "b03" && cor == "imbuia"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/03imbuia.png");
			$("#cor").text("Imbuia");
			$("#numero").text("03 Mastros");
			$("#quant").text("x3");
		}
		else if(base == "b03" && cor == "jacaranda"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/03jacaranda.png");
			$("#cor").text("Jacarandá");
			$("#numero").text("03 Mastros");
			$("#quant").text("x3");
		}
		else if(base == "b04" && cor == "mogno"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/04mogno.png");
			$("#cor").text("Mogno");
			$("#numero").text("04 Mastros");
			$("#quant").text("x4");
		}
		else if(base == "b04" && cor == "imbuia"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/04imbuia.png");
			$("#cor").text("Imbuia");
			$("#numero").text("04 Mastros");
			$("#quant").text("x4");
		}
		else if(base == "b04" && cor == "jacaranda"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/04jacaranda.png");
			$("#cor").text("Jacarandá");
			$("#numero").text("04 Mastros");
			$("#quant").text("x4");
		}
		else if(base == "b05" && cor == "mogno"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/05mogno.png");
			$("#cor").text("Mogno");
			$("#numero").text("05 Mastros");
			$("#quant").text("x5");
		}
		else if(base == "b05" && cor == "imbuia"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/05imbuia.png");
			$("#cor").text("Imbuia");
			$("#numero").text("05 Mastros");
			$("#quant").text("x5");
		}
		else if(base == "b05" && cor == "jacaranda"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/05jacaranda.png");
			$("#cor").text("Jacarandá");
			$("#numero").text("05 Mastros");
			$("#quant").text("x5");
			

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
		
		
		//marfim falta alterar link
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
		
		
		else if(base == "b02" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632859");
		}
		else if(base == "b02" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3632863");
		}
		
		
		
		
		//marfim falta alterar link
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
		
		
		else if(base == "b03" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412548");
		}
		else if(base == "b03" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412557");
		}
		
		
		
		//marfim falta alterar link
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
		
		
		else if(base == "b04" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412550");
		}
		else if(base == "b04" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412561");
		}
		
		
			//marfim falta alterar link
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
		
		
		else if(base == "b05" && cor == "mogno" && ponteira == "lanca"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412552");
		}
		else if(base == "b05" && cor == "mogno" && ponteira == "bola"){
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=3412563");
			
		}
		
		
		
			//marfim falta alterar link
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
