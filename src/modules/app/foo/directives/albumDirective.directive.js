'use strict';

module.exports = function albumDirective() {
	return function(scope, element, attr) {	
			var begin = 0;
			var end = 10;

			scope.$on('sob', function(){
				var parentDiv = angular.element("<div class='albom-conteiner'>");
				element.append(parentDiv);
				appElement(scope.imagesArray.slice(begin,end));
				
				window.onscroll = function () {				
				    var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
				    var documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
				    var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

				    if((documentHeight - clientHeight) <= scrollTop) {
				        begin +=10;
				        end +=10;
				        appElement(scope.imagesArray.slice(begin,end));
				    }		
				}

				function appElement(arr){
					for(var i = 0; i < arr.length; i++){
						var pictureDiv = angular.element("<div class='picture'>");
						var img = angular.element("<img>");
						var span = angular.element("<span>"); 
						var a = angular.element("<a>Album</a>");
						a.text("Album " + arr[i].albumId);
						a.attr('href', '#/album/' + arr[i].albumId);
						img.attr("src", arr[i].url);
						pictureDiv.append(img);
						pictureDiv.append(a);
						pictureDiv.append(span);
						parentDiv.append(pictureDiv);
					};	
				};
				

			});
		}
}