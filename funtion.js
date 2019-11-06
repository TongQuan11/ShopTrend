var back;
function back(k){
	var btback = document.createElement("button");
            btback.className = "button";
            btback.innerText = "BACK";
            contain1.appendChild(btback);
           	if(k == 1){
           		 btback.onclick = function(){
                            document.getElementById("container1").innerHTML = "";
                            displayProduct();
            	}
           	}
           	if(k == 2){
           		 btback.onclick = function(){
                            document.getElementById("container1").innerHTML = "";
                            displayfind();
            	}
           	}
           	if(k == 3){
           		 btback.onclick = function(){
                            document.getElementById("container1").innerHTML = "";
                            displayprmale();
            	}
           	}
           	if(k == 4){
           		 btback.onclick = function(){
                            document.getElementById("container1").innerHTML = "";
                            displayprfemale();
            	}
           	}
           
            

}
