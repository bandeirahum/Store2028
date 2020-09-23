// JavaScript Document

$(document).ready(function() {
	var lugar = "cami01";
			
	$("#setaDir").click(function() {
		if(lugar == "cami01"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami02";
		}
		else if(lugar == "cami02"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami03";
		}
		else if(lugar == "cami03"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami04";
		}
		else if(lugar == "cami04"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami05";
		}
		else if(lugar == "cami05"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami06";
		}
		else if(lugar == "cami06"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami07";
		}
		else if(lugar == "cami07"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami08";
		}
		else if(lugar == "cami08"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami09";
		}
		else if(lugar == "cami09"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami10";
		}
		else if(lugar == "cami10"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami11";
		}
		else if(lugar == "cami11"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami12";
		}
		else if(lugar == "cami12"){
			$(".boxCami").animate({
				"left": "-=211px"
			}, 300 );
			lugar = "cami13";
		}
		else if(lugar == "cami13"){
			null
		}
	});
	
	$("#setaEsq").click(function() {
		if(lugar == "cami01"){
			null
		}
		else if(lugar == "cami02"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami01";
		}
		else if(lugar == "cami03"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami02";
		}
		else if(lugar == "cami04"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami03";
		}
		else if(lugar == "cami05"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami04";
		}
		else if(lugar == "cami06"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami05";
		}
		else if(lugar == "cami07"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami06";
		}
		else if(lugar == "cami08"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami07";
		}
		else if(lugar == "cami09"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami08";
		}
		else if(lugar == "cami10"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami09";
		}
		else if(lugar == "cami11"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami10";
		}
		else if(lugar == "cami12"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami11";
		}
		else if(lugar == "cami13"){
			$(".boxCami").animate({
				"left": "+=211px"
			}, 300 );
			lugar = "cami12";
		}
	});
	
	var lugar2 = "bone01";
				
	$("#setaDir02").click(function() {
		if(lugar2 == "bone01"){
			$(".boxBones").animate({
				"left": "-=122px"
			}, 300 );
			lugar2 = "bone02";
		}
		else if(lugar2 == "bone02"){
			$(".boxBones").animate({
				"left": "-=122px"
			}, 300 );
			lugar2 = "bone03";
		}
		else if(lugar2 == "bone03"){
			$(".boxBones").animate({
				"left": "-=122px"
			}, 300 );
			lugar2 = "bone04";
		}
		else if(lugar2 == "bone04"){
			null
		}
	});
				
	$("#setaEsq02").click(function() {
		if(lugar2 == "bone01"){
			null
		}
		else if(lugar2 == "bone02"){
			$(".boxBones").animate({
				"left": "+=122px"
			}, 300 );
			lugar2 = "bone01";
		}
		else if(lugar2 == "bone03"){
			$(".boxBones").animate({
				"left": "+=122px"
			}, 300 );
			lugar2 = "bone02";
		}
		else if(lugar2 == "bone04"){
			$(".boxBones").animate({
				"left": "+=122px"
			}, 300 );
			lugar2 = "bone03";
		}
	});	
});