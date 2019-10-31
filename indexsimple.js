         var product1 = {
            imag: "imgs/anh1.jpg",
            name: "DRESS",
            made: "CHINA",
            price: 6000,
            info: "Hallo"
        }
        var product2 = {
            imag: "imgs/anh2.jpg",
            name: "PANTS",
            made: "VIET NAME",
            price: 40000,
            info: "Hallo"
        }
        var product3 = {
            imag: "imgs/anh3.jpg",
            name: "SHORT DRESS",
            made: "LAOS",
            price: 12230,
            info: "Hallo"
        }
        var product4 = {
            imag: "imgs/anh4.jpg",
            name: "DRESS",
            made: "THAILAND",
            price: 1630,
            info: "Hallo"
        }
        var product5 = {
            imag: "imgs/anh5.jpg",
            name: "VEST COUNPBLE",
            made: "JAPAN",
            price: 11243,
            info: "Hallo"
        }
        var product6 = {
            imag: "imgs/girl-01.jpg",
            name: "DRESS WHITE",
            made: "ENGLAND",
            price: 11323,
            info: "Hallo"
        }
        var product7 = {
            imag: "imgs/men-02.jpg",
            name: "VEST MAN",
            made: "QUANG TRI",
            price: 11623,
            info: "Hallo"
        }
         var product8 = {
            imag: "imgs/men-03.jpg",
            name: "VEST",
            made: "DAKRONG",
            price: 11200,
            info: "Hallo"
        }
        var prfemale = [product1,product3, product4,product6];
        var prmale= [product2,product5, product7, product8];
        var product = [];
        var cart = [];
        var find = [];
        function pushPrfemale() {
            for (var i = 0; i < prfemale.length; i++) {
               product.push(prfemale[i]);
               console.log(product);
            }
        }
        function pushPrmale() {
            for (var i = 0; i < prfemale.length; i++) {
               product.push(prmale[i]);
            }
        }
        var contain1 = document.getElementById("container1");
        function displayProduct() {
            for (var i = 0; i < product.length; i++) {
                var div1 = document.createElement("div");
                var div2 = document.createElement("div");
                var Pimag = document.createElement("img");
                var Pname = document.createElement("b");
                var Pmade = document.createElement("b");
                var Pprice = document.createElement("p");
                var btadd = document.createElement("button");
                var btdetail = document.createElement("button");
                div2.className = "div2";
                div1.className = "div1";
                btadd.className = "button";
                contain1.className = "contain";
                Pname.innerText = product[i].name;
                Pimag.src = product[i].imag;
                Pmade.innerText = product[i].made;
                Pprice.innerText = product[i].price + " VND";
                btadd.innerText = "ADD";
                btdetail.innerText = "DETAIL"
                div2.appendChild(btdetail);
                div2.appendChild(btadd);
                div1.appendChild(Pimag);
                div1.appendChild(Pname);
                div1.appendChild(Pmade);
                div1.appendChild(Pprice);
                div1.appendChild(div2);
                contain1.appendChild(div1);
                btadd.onclick = function(arg) {
                    return function() {
                        cart.push(product[arg]);
                        alert("Added into cart");
                    }
                }(i);
                btdetail.onclick = function(arg){
                    return function(){
                        document.getElementById("container1").innerHTML = "";
                        var btback = document.createElement("button");
                        var divdetail = document.createElement("div");
                        var Dimag = document.createElement("img");
                        var Pname = document.createElement("b");
                        var Pmade = document.createElement("b");
                        var Pprice = document.createElement("p");
                        var infor = document.createElement("p");
                        var btadd = document.createElement("button");
                        divdetail.className = "divdetail";
                        btadd.className = "button";
                        btback.className = "button";
                        contain1.className = "contain";
                        Dimag.src = product[arg].imag;
                        Pname.innerText = product[arg].name;
                        Pmade.innerText = product[arg].made;
                        Pprice.innerText = product[arg].price + " VND";
                        infor.innerText = product[arg].info;
                        btadd.innerText = "ADD";
                        btback.innerText = "BACk";
                        divdetail.appendChild(Dimag);
                        divdetail.appendChild(Pname);
                        divdetail.appendChild(Pmade);
                        divdetail.appendChild(Pprice);
                        divdetail.appendChild(infor);
                        divdetail.appendChild(btback);
                        contain1.appendChild(divdetail);
                        divdetail.appendChild(btadd);
                        btback.onclick = function(){
                            document.getElementById("container1").innerHTML = "";
                            displayProduct();
                        }
                        btadd.onclick = function(){
                        cart.push(product[arg]);
                        alert("Added into cart");
                        }
                    }
                }(i);
            }
        }
        // function displayprfemale() {
        //     for (var i = 0; i < prfemale.length; i++) {
        //         var div1 = document.createElement("div");
        //         var div2 = document.createElement("div");
        //         var Pimag = document.createElement("img");
        //         var Pname = document.createElement("b");
        //         var Pmade = document.createElement("b");
        //         var Pprice = document.createElement("p");
        //         var btadd = document.createElement("button");
        //         var btdetail = document.createElement("button");

        //         div2.className = "div2";
        //         div1.className = "div1";
        //         btadd.className = "button";
        //         contain1.className = "contain";

        //         Pname.innerText = prfemale[i].name;
        //         Pimag.src = prfemale[i].imag;
        //         Pmade.innerText = prfemale[i].made;
        //         Pprice.innerText = prfemale[i].price + " VND";
        //         btadd.innerText = "ADD";
        //         btdetail.innerText = "DETAIL"

        //         div2.appendChild(btdetail);
        //         div2.appendChild(btadd);
        //         div1.appendChild(Pimag);
        //         div1.appendChild(Pname);
        //         div1.appendChild(Pmade);
        //         div1.appendChild(Pprice);
        //         div1.appendChild(div2);
                
        //         contain1.appendChild(div1);
        //         btadd.onclick = function(arg) {
        //             return function() {
        //                 cart.push(prfemale[arg]);
        //                 alert("Added into cart");
        //             }
        //         }(i);
        //         btdetail.onclick = function(arg){
        //             return function(){
        //                 document.getElementById("container1").innerHTML = "";
        //                 var btback = document.createElement("button");

        //                 var divdetail = document.createElement("div");
        //                 var Dimag = document.createElement("img");
        //                 var Pname = document.createElement("b");
        //                 var Pmade = document.createElement("b");
        //                 var Pprice = document.createElement("p");
        //                 var infor = document.createElement("p");
        //                 var btadd = document.createElement("button");

        //                 divdetail.className = "divdetail";
        //                 btadd.className = "button";
        //                 contain1.className = "contain";
        //                 btback.className = "button";

        //                 Dimag.src = prfemale[arg].imag;
        //                 Pname.innerText = prfemale[arg].name;
        //                 Pmade.innerText = prfemale[arg].made;
        //                 Pprice.innerText = prfemale[arg].price + " VND";
        //                 infor.innerText = prfemale[arg].info;
        //                 btadd.innerText = "ADD";
        //                 btback.innerText = "BACk";
                       

        //                 divdetail.appendChild(Dimag);
        //                 divdetail.appendChild(Pname);
        //                 divdetail.appendChild(Pmade);
        //                 divdetail.appendChild(Pprice);
        //                 divdetail.appendChild(infor);
        //                 divdetail.appendChild(btback);
        //                 contain1.appendChild(divdetail);
        //                 divdetail.appendChild(btadd);
        //                 btback.onclick = function(){
        //                     document.getElementById("container1").innerHTML = "";
        //                     displayprfemale();
        //                 }
        //                 btadd.onclick = function(){
        //                 cart.push(prfemale[arg]);
        //                 alert("Added into cart");
        //             }
                
        //             }
        //         }(i);
        //     }
        // }

        // function displayprmale() {
        //     for (var i = 0; i < prmale.length; i++) {
        //         var div1 = document.createElement("div");
        //         var div2 = document.createElement("div");
        //         var Pimag = document.createElement("img");
        //         var Pname = document.createElement("b");
        //         var Pmade = document.createElement("b");
        //         var Pprice = document.createElement("p");
        //         var btadd = document.createElement("button");
        //         var btdetail = document.createElement("button");

        //         div2.className = "div2";
        //         div1.className = "div1";
        //         btadd.className = "button";
        //         contain1.className = "contain";

        //         Pname.innerText = prmale[i].name;
        //         Pimag.src = prmale[i].imag;
        //         Pmade.innerText = prmale[i].made;
        //         Pprice.innerText = prmale[i].price + " VND";
        //         btadd.innerText = "ADD";
        //         btdetail.innerText = "DETAIL"

        //         div2.appendChild(btdetail);
        //         div2.appendChild(btadd);
        //         div1.appendChild(Pimag);
        //         div1.appendChild(Pname);
        //         div1.appendChild(Pmade);
        //         div1.appendChild(Pprice);
        //         div1.appendChild(div2);
                
        //         contain1.appendChild(div1);
        //         btadd.onclick = function(arg) {
        //             return function() {
        //                 cart.push(prmale[arg]);
        //                 alert("Added into cart");
        //             }
        //         }(i);
        //         btdetail.onclick = function(arg){
        //             return function(){
        //                 document.getElementById("container1").innerHTML = "";
        //                 var btback = document.createElement("button");

        //                 var divdetail = document.createElement("div");
        //                 var Dimag = document.createElement("img");
        //                 var Pname = document.createElement("b");
        //                 var Pmade = document.createElement("b");
        //                 var Pprice = document.createElement("p");
        //                 var infor = document.createElement("p");
        //                 var btadd = document.createElement("button");

        //                 divdetail.className = "divdetail";
        //                 btadd.className = "button";
        //                 contain1.className = "contain";
        //                 btback.className = "button";

        //                 Dimag.src = prmale[arg].imag;
        //                 Pname.innerText = prmale[arg].name;
        //                 Pmade.innerText = prmale[arg].made;
        //                 Pprice.innerText = prmale[arg].price + " VND";
        //                 infor.innerText = prmale[arg].info;
        //                 btadd.innerText = "ADD";
        //                 btback.innerText = "BACk";
                       

        //                 divdetail.appendChild(Dimag);
        //                 divdetail.appendChild(Pname);
        //                 divdetail.appendChild(Pmade);
        //                 divdetail.appendChild(Pprice);
        //                 divdetail.appendChild(infor);
        //                 divdetail.appendChild(btback);
        //                 contain1.appendChild(divdetail);
        //                 divdetail.appendChild(btadd);
        //                 btback.onclick = function(){
        //                     document.getElementById("container1").innerHTML = "";
        //                     displayprmale();
        //                 }
        //                 btadd.onclick = function(){
        //                 cart.push(prmale[arg]);
        //                 alert("Added into cart");
        //             }
                
        //             }
        //         }(i);

        //     }
        // }
        pushPrfemale();
        pushPrmale();
        displayProduct();
        var contain2 = document.getElementById("container1");
        function displaycart(){
            if(cart.length  != 0){
                document.getElementById("container1").innerHTML = "";
                removeall();
                backProduct();
                for(var i = 0; i < cart.length; i++) {
                    var div3 = document.createElement("div");
                    var Pimag = document.createElement("img");
                    var Pname = document.createElement("b");
                    var Pmade = document.createElement("b");
                    var Pprice = document.createElement("p");
                    var tbdele = document.createElement("button");
                    div3.className = "div3";
                    tbdele.className = "button";
                    contain2.className = "contain2";
                    Pimag.src = cart[i].imag;
                    Pname.innerText = cart[i].name;
                    Pmade.innerText = cart[i].made;
                    Pprice.innerText = cart[i].price + " VND";
                    tbdele.innerText = "DELETE";
                    div3.appendChild(Pimag);
                    div3.appendChild(Pname);
                    div3.appendChild(Pmade);
                    div3.appendChild(Pprice);
                    div3.appendChild(tbdele);
                    contain2.appendChild(div3);

                    tbdele.onclick = function(arg) {
                        return function() {
                            cart.splice(arg, 1);
                            document.getElementById("container1").innerHTML = "";
                            displaycart();
                        }
                    }(i);
                }
            }
        
        else{
            document.getElementById("container1").innerHTML = "";
            removeall();
            backProduct();
            alert("chua co hang");
        }
     } 
        function backProduct(){
            var btback = document.createElement("button");
            btback.className = "button";
            btback.innerText = "BACK";
            contain1.appendChild(btback);
            btback.onclick = function(){
                            document.getElementById("container1").innerHTML = "";
                            displayProduct();
            }
        }
        function backfind(){
            var btback = document.createElement("button");
            btback.className = "button";
            btback.innerText = "BACK";
            contain1.appendChild(btback);
            btback.onclick = function(){
                            document.getElementById("container1").innerHTML = "";
                            displayfind();
            }
        }
        // function backprmale(){
        //     var btback = document.createElement("button");
        //     btback.className = "button";
        //     btback.innerText = "BACK";
        //     contain1.appendChild(btback);
        //     btback.onclick = function(){
        //                     document.getElementById("container1").innerHTML = "";
        //                     displayprmale();
        //     }
        
        // }
        function removeall(){
            var removeall = document.createElement("button");
            removeall.className = "button";
            removeall.innerText ="Remove";
            contain2.appendChild(removeall);
            removeall.onclick = function(){
                cart.splice(0, cart.length);
                document.getElementById("container1").innerHTML = "";
                backProduct();
            }
        }   
        function displayfind(){
             backProduct();
            for (var j = 0; j < find.length; j++) {
                var div1 = document.createElement("div");
                var div2 = document.createElement("div");
                var Pimag = document.createElement("img");
                var Pname = document.createElement("b");
                var Pmade = document.createElement("b");
                var Pprice = document.createElement("p");
                var btadd1 = document.createElement("button");
                var btdetail = document.createElement("button");
                div2.className = "div2";
                div1.className = "div1";
                btadd1.className = "button";
                contain1.className = "contain";
                Pname.innerText = find[j].name;
                Pimag.src = find[j].imag;
                Pmade.innerText = find[j].made;
                Pprice.innerText = find[j].price + " VND";
                btadd1.innerText = "ADD";
                btdetail.innerText = "DETAIL"
                div2.appendChild(btdetail);
                div2.appendChild(btadd1);
                div1.appendChild(Pimag);
                div1.appendChild(Pname);
                div1.appendChild(Pmade);
                div1.appendChild(Pprice);
                div1.appendChild(div2);
                contain1.appendChild(div1);
                btadd1.onclick = function(arg) {
                    return function() {
                        cart.push(find[arg]);
                        alert("Added into cart");
                        console.log(cart);
                    }
                }(j)
                btdetail.onclick = function(arg){
                    return function(){
                        document.getElementById("container1").innerHTML = "";
                        backfind();
                        var divdetail = document.createElement("div");
                        var Dimag = document.createElement("img");
                        var Pname = document.createElement("b");
                        var Pmade = document.createElement("b");
                        var Pprice = document.createElement("p");
                        var infor = document.createElement("p");
                        var btadd = document.createElement("button");
                        divdetail.className = "divdetail";
                        btadd.className = "button";
                        contain1.className = "contain";
                        Dimag.src = find[arg].imag;
                        Pname.innerText = find[arg].name;
                        Pmade.innerText = find[arg].made;
                        Pprice.innerText = find[arg].price + " VND";
                        infor.innerText = find[arg].info;
                        btadd.innerText = "ADD";
                        divdetail.appendChild(Dimag);
                        divdetail.appendChild(Pname);
                        divdetail.appendChild(Pmade);
                        divdetail.appendChild(Pprice);
                        divdetail.appendChild(infor);
                        contain1.appendChild(divdetail);
                        divdetail.appendChild(btadd);
                        btadd.onclick = function(){
                            cart.push(find[arg]);
                            alert("Added into cart");
                    }
                    }
                }(j);
            } 
        }
        function Search(){
            var search = document.getElementById("search").value;
            find.splice(0,find.length);
            for(var i=0; i < product.length; i++){
                if (search == product[i].name || search == product[i].made){
                   find.push(product[i]);
                }
            }
            document.getElementById("container1").innerHTML = "";
            displayfind();
        }
       
       
        
      