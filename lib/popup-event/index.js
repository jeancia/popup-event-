
var popup-event = (function () {
	
	/*Je ajoute du css*/
        
        var style = document.createElement("style");
        style.type = "text/css";
        
        var css = document.createTextNode("div {}");
        if(style.stylesheet){
            style.stylesheet.cssText = css;
        } else {
            style.appendChild(css);
        }
        document.getElementsByTagName("head")[0].appendChild(style);
        
        
	var getHelper = function(message) {
		
		if (typeof message !== "string") {
			throw new Error("Message must be string");
		}
		
		/* Je creer des Element*/
		
		var div = document.createElement("div");
		var p = document.createElement("p");
		var close = document.createElement("a");
		var button = document.createElement("button");
                var buttonCancel = document.createElement("button");
		
		/* Je creer des Textes*/
		
		var pText = document.createTextNode("New message");
		close.innerHTML = "&#x274c;";
		var buttonText = document.createTextNode("Je visite");
                var buttonTextCancel = document.createTextNode("Cancel");
		
		/* J'insere le Texte dans les elements*/
		
		p.appendChild(pText);
		button.appendChild(buttonText);
                buttonCancel.appendChild(buttonTextCancel);
                
                /*Je ajoute les elements dans le HTML*/
		
		div.appendChild(close);
		div.appendChild(p);
		div.appendChild(button);
                div.appendChild(buttonCancel);
		
		/*Je fais du style*/
                
		div.setAttribute("id", "minpopup");
                div.style.boxShadow = "0 75px 100px #black";
		
                /*Je creer des fonctionalité pour les boutons*/
                
                var ok = function () {
                     
                pText =document.createTextNode("welcome"); 
                p.appendChild(pText);
                div.insertBefore(p, div.firstChild.nextSibling);
                }; 
                
//                function cancel() {
//                    window.location = "http://www.larousse.fr/encyclopedie/divers/trag%C3%A9die/98141";
//                };
		
		/*Je fais un evenement onclick*/
		
		close.onclick = function () {
			var parent = close.parentNode;
			parent.style.left = "0%";
                        button.style.background ="#C60800";
                        buttonCancel.style.background ="#C60800";
                        parent.style.background ="#C60800";
			parent.style.opacity = 0;
			window.setTimeout( function () {
                            parent.parentNode.removeChild(parent);
			}, 1000);
		};
		
		button.onclick = function () {
                        button.onclick = null;
			var parent = button.parentNode;
			button.style.background ="green";
                        buttonCancel.style.background ="green";
			parent.style.background ="green";
			parent.style.opacity = 0;
                        ok();
			window.setTimeout( function () {
                            parent.parentNode.removeChild(parent);
			}, 1000);
		};
                
                buttonCancel.onclick = function () {
                        var parent = buttonCancel.parentNode;
                        parent.style.left = "100%";
			buttonCancel.style.background ="yellow";
                        button.style.background ="yellow";
			parent.style.background ="yellow";
			parent.style.opacity = 0;
                        /* Je ajoute la fonctionnalité au bonton*/
                        cancel();
			window.setTimeout( function () {
                            parent.parentNode.removeChild(parent);
			}, 1000);
                };
		
		return div;
	};
	
	var log = function(helper) {
		
		if(!(helper instanceof window.HTMLElement) || !document.body) {
			throw new Error("require a valid documen and a body");
		}
		document.body.appendChild(helper);
		helper.clientHeight;
		helper.style.left = "20%";
	};
	
	return {
		welcome : function(message){
			var helper = getHelper(message);
//                        console.log(helper.getElementsByTagName("button"));
//                        console.log(helper.getElementsByTagName("button")[0]);
                        helper.getElementsByTagName("button")[0]
                            .setAttribute("class", "welcome");
			log(helper);
		}
	
	};
	
	
}) ();
