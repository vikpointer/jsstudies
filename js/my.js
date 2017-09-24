(function($) {
	$.fn.myExt = function(options) {
		options = $.extend({
			widthLine: "1px",//Толщина рамки
			baseColor: "black",//Цвет элемента без курсора
			hoverColor: "red",//Цвет рамки при наведении курсора
		},options);
		var make = function() {
			$(this).css("border", options.widthLine + " solid " + options.baseColor);
			
			$(this).mouseenter(function() {
				$(this).css("border-color", options.hoverColor);
			});
			
			$(this).mouseleave(function(){
				$(this).css("border-color", options.baseColor);
			});
		}
		return this.each(make);
	};
})($);