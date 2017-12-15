//YOUR STYLESHEETS MUST BE IN A DIRECTORY CALLED CSS AND MUST BE NAMED "sheet1.css","sheet2.css", etc.

$sheetNumbers = 25; //CHANGE THIS NUMBER IF YOU WOULD LIKE MORE STYLESHEETS

$(document).ready(function(){



	$("<div></div>").attr("id","menu").css({

	}).html(function(){
		var $links = "";
		for (i =1; i < $sheetNumbers; i++) {
			$links+= "<a class='sheetLink' data-source='"+i+"'>"+i+"</a> ";
		}
		return $links;
	})
	.prependTo("body");


	$(".sheetLink").click(function(){
		$("#stylesheet").attr("href","css/style"+$(this).data("source")+".css")
	});

});