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
	$("#checkBase, #checkCor, #checkIndisponivel, #checkPont").css("display", "none");
	
	//Boxes ocultos
	$("#proxBase, #proxCor, .fotosPrev").css("display", "none");
	
	//Escolher Base
	$("#base01").click(function() {
		$("#checkBase").css("display", "block").css("top", "158px").css("left", "235px");
		base = "b01";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base02").click(function() {
		$("#checkBase").css("display", "block").css("top", "158px").css("left", "355px");
		base = "b02";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base03").click(function() {
		$("#checkBase").css("display", "block").css("top", "158px").css("left", "495px");
		base = "b03";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base04").click(function() {
		$("#checkBase").css("display", "block").css("top", "158px").css("left", "625px");
		base = "b04";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base05").click(function() {
		$("#checkBase").css("display", "block").css("top", "158px").css("left", "805px");
		base = "b05";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base06").click(function() {
		$("#checkIndisponivel").css("display", "block").css("top", "158px").css("left", "975px");
		base = "b06";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});	
	$("#base07").click(function() {
		$("#checkBase").css("display", "block").css("top", "320px").css("left", "280px");
		base = "b07";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base08").click(function() {
		$("#checkBase").css("display", "block").css("top", "320px").css("left", "440px");
		base = "b08";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base09").click(function() {
		$("#checkBase").css("display", "block").css("top", "320px").css("left", "620px");
		base = "b09";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base10").click(function() {
		$("#checkBase").css("display", "block").css("top", "320px").css("left", "795px");
		base = "b10";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	$("#base11").click(function() {
		$("#checkBase").css("display", "block").css("top", "320px").css("left", "990px");
		base = "b11";
		if(redT1 == true){
			$("#tit1").removeAttr("style");
		}
	});
	//Escolher Cor
	$("#cor01").click(function() {
		$("#checkCor").css("display", "block").css("top", "60px").css("left", "260px");
		cor = "cerejeira";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor02").click(function() {
		$("#checkCor").css("display", "block").css("top", "60px").css("left", "420px");
		cor = "imbuia";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor03").click(function() {
		$("#checkCor").css("display", "block").css("top", "210px").css("left", "255px");
		cor = "jacaranda";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	$("#cor04").click(function() {
		$("#checkCor").css("display", "block").css("top", "210px").css("left", "417px");
		cor = "mogno";
		if(redT2 == true){
			$("#tit2").removeAttr("style");
		}
	});
	
	//Escolhe Ponteira
	$("#lanca").click(function() {
		$("#checkPont").css("display", "block").css("top", "30px").css("left", "265px");
		ponteira = "lanca";
		if(redT3 == true){
			$("#tit3").removeAttr("style");
		}
	});
	$("#bola").click(function() {
		$("#checkPont").css("display", "block").css("top", "30px").css("left", "100px");
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
		if(base == "b01" && cor == "cerejeira" && ponteira == "lanca"){
			$("#boxBase").load("<baseloja>htm/2018/kitbm19/desckit19/preview_kit.html");
		}
		else if(base == "b01" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("href", "https://www.rumo.com.br/lojas/00002028/htm/2018/kitbm19/desckit19/preview_kit.html");	
		}
		else if(base == "b01" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog1L.jpg");
					
		}
		else if(base == "b01" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac1L.jpg");
			
		}
		
		else if(base == "b02" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer2L.jpg");
		
		}
		else if(base == "b02" && cor == "mogno"&& ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog2L.jpg");
			
		}
		else if(base == "b02" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb2L.jpg");
			
		}
		else if(base == "b02" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac2L.jpg");
			
		}
		else if(base == "b03" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer3L.jpg");
			
		}
		else if(base == "b03" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog3L.jpg");
			
		}
		else if(base == "b03" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb3L.jpg");
			
		}
		else if(base == "b03" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac3L.jpg");
			
		}
		else if(base == "b04" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer4L.jpg");
			
		}
		else if(base == "b04" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog4L.jpg");
			
		}
		else if(base == "b04" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb4L.jpg");
		
		}
		else if(base == "b04" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac4L.jpg");
			
		}
			else if(base == "b05" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer5L.jpg");
			
		}
		else if(base == "b05" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog5L.jpg");
			
		}
		else if(base == "b05" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb5L.jpg");
			
		}
		else if(base == "b05" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac5L.jpg");
			
		}
		else if(base == "b06" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/imgfundoind.jpg");
			
		}
		else if(base == "b07" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer2modL.jpg");
			
		}
		else if(base == "b07" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac2modL.jpg");
			
		}
		else if(base == "b07" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog2modL.jpg");
			
		}
		else if(base == "b07" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb2modL.jpg");
			
		}
		else if(base == "b08" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer3modL.jpg");
			
		}
		else if(base == "b08" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac3modL.jpg");
			
		}
		else if(base == "b08" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb3modL.jpg");
			
		}
		else if(base == "b08" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog3modL.jpg");
			
		}
		else if(base == "b09" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer4modL.jpg");
			
		}
		else if(base == "b09" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb4modL.jpg");
			
		}
		else if(base == "b09" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac4modL.jpg");
			
		}
		else if(base == "b09" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog4modL.jpg");
			
		}
		else if(base == "b10" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog5modL.jpg");
			
		}
		else if(base == "b10" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb5modL.jpg");
			
		}
		else if(base == "b10" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer5modL.jpg");
			
		}
		else if(base == "b10" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac5modL.jpg");
			
		}
		else if(base == "b11" && cor == "jacaranda" && ponteira == "lanca"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac6modL.jpg");
			
		}
		else if(base == "b11" && cor == "imbuia" && ponteira == "lanca"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb6modL.jpg") ("href", "");
		}
		else if(base == "b11" && cor == "mogno" && ponteira == "lanca"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog6modL.jpg") ("href", "");
		}
		else if(base == "b11" && cor == "cerejeira" && ponteira == "lanca"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer6modL.jpg") ("href", "");
		}
		
		//Ponteira Bola
		
		else if(base == "b01" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog1B.jpg");
		}
		else if(base == "b01" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb1B.jpg");
			
		}		
		else if(base == "b01" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer1B.jpg");
					
		}
		else if(base == "b01" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac1B.jpg");
			
		}
		else if(base == "b02" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/2018/kitbm18/cer2B.jpg");
		
		}
		else if(base == "b02" && cor == "mogno"&& ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog2B.jpg");
			
		}
		else if(base == "b02" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb2B.jpg");
			
		}
		else if(base == "b02" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac2B.jpg");
			
		}
		else if(base == "b03" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer3B.jpg");
			
		}
		else if(base == "b03" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog3B.jpg");
			
		}
		else if(base == "b03" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb3B.jpg");
			
		}
		else if(base == "b03" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac3B.jpg");
			
		}
		else if(base == "b04" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer4B.jpg");
			
		}
		else if(base == "b04" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog4B.jpg");
			
		}
		else if(base == "b04" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb4B.jpg");
		
		}
		else if(base == "b04" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac4B.jpg");
			
		}
			else if(base == "b05" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer5B.jpg");
			
		}
		else if(base == "b05" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog5B.jpg");
			
		}
		else if(base == "b05" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb5B.jpg");
			
		}
		else if(base == "b05" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac5B.jpg");
			
		}
		else if(base == "b06" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm2014/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/imgfundoind.jpg");
			
		}
		else if(base == "b06" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/images/kitbm/imgfundoind.jpg");
			
		}
		else if(base == "b07" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer2modB.jpg");
			
		}
		else if(base == "b07" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac2modB.jpg");
			
		}
		else if(base == "b07" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog2modB");
			
		}
		else if(base == "b07" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb2modB.jpg");
			
		}
		else if(base == "b08" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer3modB.jpg");
			
		}
		else if(base == "b08" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac3modB.jpg");
			
		}
		else if(base == "b08" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb3modB.jpg");
			
		}
		else if(base == "b08" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog3modB.jpg");
			
		}
		else if(base == "b09" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer4modB.jpg");
			
		}
		else if(base == "b09" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb4modB.jpg");
			
		}
		else if(base == "b09" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac4modB.jpg");
			
		}
		else if(base == "b09" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog4modB.jpg");
			
		}
		else if(base == "b10" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog5modB.jpg");
			
		}
		else if(base == "b10" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb5modB.jpg");
			
		}
		else if(base == "b10" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer5modB.jpg");
			
		}
		else if(base == "b10" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac5modB.jpg");
			
		}
		else if(base == "b11" && cor == "jacaranda" && ponteira == "bola"){
			$(".imgBase").attr("src", "https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/jac6modB.jpg");
			
		}
		else if(base == "b11" && cor == "imbuia" && ponteira == "bola"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/imb6modB.jpg");
		}
		else if(base == "b11" && cor == "mogno" && ponteira == "bola"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/mog6modB.jpg");
		}
		else if(base == "b11" && cor == "cerejeira" && ponteira == "bola"){
			$(".imgBase").attr( "src","https://www.rumo.com.br/lojas/00002028/prod/2018/imgkitbase/cer6modB.jpg");
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
			$(".linkProd").attr("href", "ListaProdutos.asp?IDLoja=2028&IDProduto=4697819");
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
			$(".linkProd").attr("href", "http://www.bandeira1.com.br/ListaProdutos.asp?IDLoja=2028&IDProduto=4720701");
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
