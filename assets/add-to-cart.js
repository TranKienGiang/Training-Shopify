let items = document.querySelectorAll(".add-to-cart");
items.forEach((event) => {
    event.addEventListener("click", (e) => {
        e.preventDefault();
        
        const data_variant_id = $('.single-option-selector').val();
        const id_product = event.getAttribute('item-id');

        if(data_variant_id != null) {
            id_product == data_variant_id;
        }
        
        const quantity_product = event.getAttribute('quantity');
        if(quantity_product) {
            quantity = quantity_product;
        }
        else {
            quantity = $('.popup-quantity').val();
        }
        addItemToCart(id_product, quantity, "1", "Months");
    });
    function addItemToCart(variant_id, qty, frequency, unit_type) {
        data = {
            "id": variant_id,
            "quantity": qty
        },
            jQuery.ajax({
                type: 'POST',
                url: '/cart/add.js',
                data: data,
                dataType: 'json',
                success: function (data) {
                    $('.overlay').css("display", "none");
                    $('#popup1').removeClass('flex-data');
                    $('#popup1').addClass('none-data');
                    jQuery.getJSON('/cart.js', function (cart) {
                        $html = "<svg class='icon icon-cart' aria-hidden='true' focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'>" +
                            "<path fill='currentColor' fill-rule='evenodd' d='M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z'></path></svg>" +
                            "<span class='visually-hidden'>Cart</span><div class='cart-count-bubble'><span aria-hidden='true'>" + cart.item_count + "</span><span class='visually-hidden'>" + cart.item_count + " item </span></div>";
                        $("#cart-icon-bubble").html($html);

                        $(".cart-notification").addClass("active").addClass("animate");
                        $data_cart_notification = "<img src=" + data.image + " alt='' width='70' height='70' loading='lazy'></div>" +
                            "<div><h3 class='cart-notification-product__name h4'>" + data.title + "</h3>";
                        $("#cart-notification-product").html($data_cart_notification);
                        
                        $cart_data_button = "<a href='/cart' id='cart-notification-button' class='button button--secondary button--full-width'>View cart(" + cart.item_count + ")</a>"
                        $("#cart-notification-button").html($cart_data_button);
                    });
                }
            });
    }
})