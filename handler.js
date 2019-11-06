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
        var product9 = {
            imag: "imgs/anh9.jpg",
            name: "DRESS",
            made: "CHINA",
            price: 6000,
            info: "Hallo"
        }
        var product10 = {
            imag: "imgs/anh10.jpg",
            name: "PANTS",
            made: "VIET NAME",
            price: 40000,
            info: "Hallo"
        }
        var product11 = {
            imag: "imgs/anh11.jpg",
            name: "SHORT DRESS",
            made: "LAOS",
            price: 12230,
            info: "Hallo"
        }
        var product12 = {
            imag: "imgs/anh12.jpg",
            name: "DRESS",
            made: "THAILAND",
            price: 1630,
            info: "Hallo"
        }
        var product13 = {
            imag: "imgs/anh13.jpg",
            name: "VEST COUNPBLE",
            made: "JAPAN",
            price: 11243,
            info: "Hallo"
        }
        var product14 = {
            imag: "imgs/anh14.png",
            name: "DRESS WHITE",
            made: "ENGLAND",
            price: 11323,
            info: "Hallo"
        }
        var product15 = {
            imag: "imgs/anh15.jpg",
            name: "VEST MAN",
            made: "QUANG TRI",
            price: 11623,
            info: "Hallo"
        }
        var product16 = {
            imag: "imgs/anh16.jpg",
            name: "VEST",
            made: "DAKRONG",
            price: 11200,
            info: "Hallo"
        }
        var prfemale = [product1, product3, product4, product6, product9, product11, product12, product14];
        var prmale = [product2, product5, product7, product8, product10, product13, product15, product16];
        var product = [];
        var cart = [];
        var find = [];
        var contain1 = document.getElementById("container1");
        var ktdetail;
        var ktinramang;
        displayProduct();

        function pushPrfemale() {
            for (var i = 0; i < prfemale.length; i++) {
                product.push(prfemale[i]);
            }
        }
        function pushPrmale() {
            for (var i = 0; i < prfemale.length; i++) {
                product.push(prmale[i]);
            }
        }
        // Ham hien thi san pham.
        function display() {
            for (var i = 0; i < ktinramang.length; i++) {
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
                Pname.innerText = ktinramang[i].name;
                Pimag.src = ktinramang[i].imag;
                Pmade.innerText = ktinramang[i].made;
                Pprice.innerText = ktinramang[i].price + " VND";
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
                        cart.push(ktinramang[arg]);
                        alert("Added into cart");
                    }
                }(i);
                btdetail.onclick = function(arg) {
                    return function() {
                        detail(arg);
                    }
                }(i);
            }
        }
        // ham hien thi detail cilck.
        function detail(arg) {
            document.getElementById("container1").innerHTML = "";
            back();
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
            Dimag.src = ktdetail[arg].imag;
            Pname.innerText = ktdetail[arg].name;
            Pmade.innerText = ktdetail[arg].made;
            Pprice.innerText = ktdetail[arg].price + " VND";
            infor.innerText = ktdetail[arg].info;
            btadd.innerText = "ADD";
            divdetail.appendChild(Dimag);
            divdetail.appendChild(Pname);
            divdetail.appendChild(Pmade);
            divdetail.appendChild(Pprice);
            divdetail.appendChild(infor);
            contain1.appendChild(divdetail);
            divdetail.appendChild(btadd);
            btadd.onclick = function() {
                cart.push(ktdetail[arg]);
                alert("Added into cart");
            }
        }
        // ham tim kiem.
        function Search() {
            var search = document.getElementById("search").value;
            find.splice(0, find.length);
            for (var i = 0; i < product.length; i++) {
                if (search == product[i].name || search == product[i].made) {
                    find.push(product[i]);
                }
            }
            document.getElementById("container1").innerHTML = "";
            displayfind();
        }
        // ham xoa tat ca san pham trong cart
        function removeall() {
            var removeall = document.createElement("button");
            removeall.className = "button";
            removeall.innerText = "Remove";
            contain2.appendChild(removeall);
            removeall.onclick = function() {
                cart.splice(0, cart.length);
                document.getElementById("container1").innerHTML = "";
                back();
            }
        }
        // hien thi product.
        function displayProduct() {
            document.getElementById("container1").innerHTML = "";
            product.splice(0, product.length);
            pushPrfemale()
            pushPrmale();
            ktinramang = product;
            ktdetail = product;
            display();
        }
        //hien thi producmale.
        function displayPrfemale() {
            document.getElementById("container1").innerHTML = "";
            alert("Gone into women's fashion");
            ktinramang = prfemale;
            ktdetail = prfemale;
            display();
        }

        function displayPrmale() {
            document.getElementById("container1").innerHTML = "";
            alert("Gone into man's fashion");
            ktinramang = prmale;
            ktdetail = prmale;
            display();
        }
        //hien thi search
        function displayfind() {
            ktinramang = find;
            ktdetail = find;
            display();
            back();
        }
        // ham tro lai
        function back() {
            var btback = document.createElement("button");
            btback.className = "button";
            btback.innerText = "BACK";
            contain1.appendChild(btback);
            if (ktdetail == product || ktinramang == find) {
                btback.onclick = function() {
                    document.getElementById("container1").innerHTML = "";
                    displayProduct();
                }
            } else if (ktdetail == prfemale || ktinramang == find) {
                btback.onclick = function() {
                    document.getElementById("container1").innerHTML = "";
                    displayPrfemale();
                }
            } else if (ktdetail == prmale || ktinramang == find) {
                btback.onclick = function() {
                    document.getElementById("container1").innerHTML = "";
                    displayPrmale();
                }
            }
        }
        // hien thi card
        var contain2 = document.getElementById("container1");
        function displaycart() {
            if (cart.length != 0) {
                document.getElementById("container1").innerHTML = "";
                removeall();
                back();
                for (var i = 0; i < cart.length; i++) {
                    var div3 = document.createElement("div");
                    var Pimag = document.createElement("img");
                    var Pname = document.createElement("b");
                    var Pmade = document.createElement("b");
                    var Pprice = document.createElement("p");
                    var tbdele = document.createElement("button");
                    var tborder = document.createElement("button");
                    div3.className = "div3";
                    tbdele.className = "button";
                    tborder.className = "button";
                    contain2.className = "contain2";
                    Pimag.src = cart[i].imag;
                    Pname.innerText = cart[i].name;
                    Pmade.innerText = cart[i].made;
                    Pprice.innerText = cart[i].price + " VND";
                    tbdele.innerText = "DELETE";
                    tborder.innerText = "ORDER";
                    div3.appendChild(Pimag);
                    div3.appendChild(Pname);
                    div3.appendChild(Pmade);
                    div3.appendChild(Pprice);
                    div3.appendChild(tbdele);
                    div3.appendChild(tborder);
                    contain2.appendChild(div3);
                    tbdele.onclick = function(arg) {
                        return function() {
                            cart.splice(arg, 1);
                            document.getElementById("container1").innerHTML = "";
                            displaycart();
                        }
                    }(i);
                    tborder.onclick = function(arg) {
                        return function() {
                            alert("he");
                            document.getElementById("container1").innerHTML = "";
                            order(arg);
                        }
                    }(i);
                }
            } else {
                document.getElementById("container1").innerHTML = "";
                removeall();
                back();
                alert("chua co hang");
            }
        }
        function order(arg) {
            var contain3 = document.getElementById("container1");
            var line_contain = document.createElement("div");
            line_contain.className = "line_contain";
            var line = document.createElement("div");
            var customer = document.createElement("h1");
            var name = document.createElement("p");
            var inputName = document.createElement("input");
            var address = document.createElement("p");
            var inputAddress = document.createElement("input");
            var phone = document.createElement("p");
            var inputPhone = document.createElement("input");
            var message = document.createElement("h1");
            var images = document.createElement("img");

            customer.innerText = "Information of customer";
            inputName.innerText = " ";
            name.innerText = "Name";
            address.innerText = "Adress";
            inputAddress.innerText = " ";
            phone.innerText = "Phone number";
            inputPhone.innerText = " ";
            message.innerText = "Product";
            images.src = cart[arg].imag;
            line.appendChild(customer);
            line.appendChild(name);
            line.appendChild(inputName);
            line.appendChild(address);
            line.appendChild(inputAddress);
            line.appendChild(phone);
            line.appendChild(inputPhone);
            line.appendChild(message);
            line.appendChild(images);
            line_contain.appendChild(line);
            var line2 = document.createElement("div");
            var pay = document.createElement("h1");
            var price = document.createElement("h1");
            var btconfirm = document.createElement("button");
            btconfirm.innerText = "Confirm";
            pay.innerText = "THANH TOAN";
            price.innerText = "Total price " + cart[arg].price + " VND";
            line2.appendChild(pay);
            line2.appendChild(price);
            line2.appendChild(btconfirm);
            line_contain.appendChild(line2);
            contain3.appendChild(line_contain);
            btconfirm.onclick = function() {
                if (inputName.value == "" || inputAddress.value == "" || inputPhone.value == "") {
                    alert("Mời bạn nhập đầy đủ thông tin");
                } else {
                    alert("Bạn đã đặt hàng thành công");
                }
            }
        }
