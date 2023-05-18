let itemsCart = document.querySelectorAll('button[name="minus"]');
itemsCart.forEach((event) => {
    event.addEventListener("click", (e) => {
        e.preventDefault(); 
        qty = event.getAttribute('quantity-product');
            const id_product = event.getAttribute('item-id');
            qtynew = qty-1;
            data = {
                'id': id_product,
                'quantity': qtynew
            },
            jQuery.ajax({
                type: 'POST',
                url: '/cart/change.js',
                data: data,
                dataType: 'json',
                success: function (data) {
                    $( document ).ready(function freeShip () {
                        var gressFreeship = 200000000;
                        $.ajax({
                            type: 'GET',
                            url: '/cart.json',
                            dataType: 'json',
                            success: function(data) { 
                                var quantity = (data.total_price)/100;
                                const widthProgess = (quantity / gressFreeship)*100;
                                $(".value-progess").css("width", `${widthProgess}%`);
                                const still_freeship = (gressFreeship -quantity);
                                console.log(still_freeship, 'giam');
                                if (still_freeship > 0) { 
                                    var still_freeship_Vnd = still_freeship.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                                    $('.title-free-shiping').text(`Just ${still_freeship_Vnd} away from free shipping!`) 
                                }
                                else {
                                    $('.title-free-shiping').text(` Your order is eligible for free shipping!`);
                                }
                            }
                        });
                    });
                    $.ajax({
                        type: 'GET',
                        url: '/cart.json',
                        dataType: 'json',
                        success: function(data) { 
                            var item_count = data.item_count;
                            var quantity = (data.total_price)/100;
                            const formattedAmount = quantity.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                            $('.your-bag').text(`Your Bag (${item_count} items)`)
                            $html = `<svg class="icon icon-cart" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">"<path fill="currentColor" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path></svg><span class="visually-hidden">Cart</span><div class="cart-count-bubble"><span aria-hidden="true"> ${item_count} </span><span class="visually-hidden"> ${item_count} item </span></div>`;
                            $("#cart-icon-bubble").html($html);
                            $('.sub-total-items').text(formattedAmount);
                            getInputQuantity = $(event).closest('.input-quantity-minicart');
                            childButton = getInputQuantity.children('.plus')
                            childButton.attr("quantity-product",qtynew);

                        }
                    });
                    $(event).attr("quantity-product",qtynew);
                    $('.gradient').css("overflow", "hidden");
                }
            });
    }) 
});


let itemsCartPlus = document.querySelectorAll('button[name="plus"]');
itemsCartPlus.forEach((event) => {
    event.addEventListener("click", (e) => {
        e.preventDefault(); 
        qty = event.getAttribute('quantity-product');
        const id_product = event.getAttribute('item-id');
        qtynew = parseInt(qty) + 1;
        data = {
            'id': id_product,
            'quantity': qtynew
        },
        jQuery.ajax({
            type: 'POST',
            url: '/cart/change.js',
            data: data,
            dataType: 'json',
            success: function (data) {
                $( document ).ready(function freeShip () {
                    var gressFreeship = 200000000;
                    $.ajax({
                        type: 'GET',
                        url: '/cart.json',
                        dataType: 'json',
                        success: function(data) { 
                            var quantity = (data.total_price)/100;
                            const widthProgess = (quantity / gressFreeship)*100;
                            $(".value-progess").css("width", `${widthProgess}%`);
                            const still_freeship = (gressFreeship -quantity);
                            console.log(still_freeship, 'tang');
                            if (still_freeship > 0) { 
                                var still_freeship_Vnd = still_freeship.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                                $('.title-free-shiping').text(`Just ${still_freeship_Vnd} away from free shipping!`) 
                            }
                            else {
                                $('.title-free-shiping').text(` Your order is eligible for free shipping!`);
                            }
                        }
                    });
                });
                $.ajax({
                    type: 'GET',
                    url: '/cart.json',
                    dataType: 'json',
                    success: function(data) { 
                        var item_count = data.item_count;
                        var quantity = (data.total_price)/100;
                        const formattedAmount = quantity.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                        $('.your-bag').text(`Your Bag (${item_count} items)`)
                        $html = `<svg class="icon icon-cart" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">"<path fill="currentColor" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path></svg><span class="visually-hidden">Cart</span><div class="cart-count-bubble"><span aria-hidden="true"> ${item_count} </span><span class="visually-hidden"> ${item_count} item </span></div>`;
                        $("#cart-icon-bubble").html($html);
                        $('.sub-total-items').text(formattedAmount);
                        getInputQuantity = $(event).closest('.input-quantity-minicart');
                        childButton = getInputQuantity.children('.minus')
                        childButton.attr("quantity-product",qtynew);
                    }
                });
                $(event).attr("quantity-product",qtynew);
                $('.gradient').css("overflow", "hidden");
            }
        });
    }) 
});


let itemsDeleteCart = document.querySelectorAll('.remove-in-cart');
itemsDeleteCart.forEach((event) => {
    event.addEventListener("click", (e) => {
        e.preventDefault(); 
        const id_product = event.getAttribute('item-id');
        qty = 0;
        data = {
            'id': id_product,
            'quantity': qty
        },
        jQuery.ajax({
            type: 'POST',
            url: '/cart/change.js',
            data: data,
            dataType: 'json',
            success: function (data) {
                $.ajax({
                    type: 'GET',
                    url: '/cart.json',
                    dataType: 'json',
                    success: function(data) { 
                        var item_count = data.item_count;
                        var quantity = (data.total_price)/100;
                        const formattedAmount = quantity.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                        $('.your-bag').text(`Your Bag (${item_count} items)`)
                        $html = `<svg class="icon icon-cart" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">"<path fill="currentColor" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path></svg><span class="visually-hidden">Cart</span><div class="cart-count-bubble"><span aria-hidden="true"> ${item_count} </span><span class="visually-hidden"> ${item_count} item </span></div>`;
                        $("#cart-icon-bubble").html($html);
                        $('.sub-total-items').text(formattedAmount);
                    }
                });
               dataproduct = $(event).closest('.arround-item-in-cart')
               dataproduct.remove();
            }
        });
    }) 
});


$( "#cart-icon-bubble" ).on( "click", function(e) {
    e.preventDefault(); 
    $('.overlay').css("display", "block");
    $('.gradient').css("overflow", "hidden");
    $('.mini-cart-show').css("position", "fixed");
    $('.mini-cart-show').css("display", "block");
  } );

$( ".close-minicart" ).on( "click", function(e) {
    e.preventDefault();
    $('.overlay').css("display", "none");
    $('.gradient').css("overflow", "auto");
    $('.mini-cart-show').css("position", "absolute");
    $('.mini-cart-show').css("display", "none");
});


document.querySelector('#checkout').addEventListener('click', function () {
    window.location.href = '/checkout';
});

$( document ).ready(function freeShip () {
    var gressFreeship = 200000000;
    $.ajax({
        type: 'GET',
        url: '/cart.json',
        dataType: 'json',
        success: function(data) { 
            var quantity = (data.total_price)/100;
            const widthProgess = (quantity / gressFreeship)*100;
            $(".value-progess").css("width", `${widthProgess}%`);
            const still_freeship = (gressFreeship -quantity);
            if (still_freeship > 0) { 
                still_freeship_Vnd = still_freeship.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                $('.title-free-shiping').text(`Just ${still_freeship_Vnd} away from free shipping!`) 
            }
            else {
                $('.title-free-shiping').text(` Your order is eligible for free shipping!`);
            }
        }
    });
});