let actions = document.querySelectorAll(".quick-view-open");
actions.forEach((event) => {
    event.addEventListener("click", (e) => {
        e.preventDefault();
        const variant_id = event.getAttribute('item-id');
        const product_handle = event.getAttribute('handle_product');
        const price_product = event.getAttribute('price');
        const description = event.getAttribute('description');
        const image_url = event.getAttribute('image-url');
        fetch('/products/' + product_handle + '.js').then(function (response) { return response.json() }).then(
            function (product) {
                $('.overlay').css("display", "block");
                $('#popup1').removeClass('none-data');
                $('#popup1').addClass('flex-data');
                $('.gradient').css("overflow", "hidden");
                let variant = product.variants.find(function (variant) { return variant.id == variant_id });
                $(".popup-name-product").text(variant.name);
                $(".popup-price").text(price_product);
                $(".description").html(description);
                $(".image-popup").attr("src",image_url);
                $('#add-to-cart-popup').attr('item-id', variant.id);
                $('.quick-view-open').attr('availabel', variant.available);
                var lenth_variants = product.variants.length;
                let $html_popup = '';
                let availabel_value = event.getAttribute('availabel');
                console.log(availabel_value);
                if(availabel_value == 'false'){
                    $('#add-to-cart-popup').text('Sold Out');
                    $('#add-to-cart-popup').css('pointer-events', 'none');
                }
                if(lenth_variants > 1){
                    $.each(product.variants, function( key, variant ) {
                        $html_popup += `<option value=${variant.id}>${variant.title}</option>`;
                    });
                    $('#SingleOptionSelector-0').html($html_popup);
                    $('#content-variants').css("display", "flex");
                }
                else {
                    $('#content-variants').css("display", "none");
                }

                let closes = document.querySelector(".close");
                closes.addEventListener("click", (e) => {
                    e.preventDefault();
                    $('.overlay').css("display", "none");
                    $('.gradient').css("overflow", "auto");
                    $('#popup1').removeClass('flex-data');
                    $('#popup1').addClass('none-data');
                    $('.popup-quantity').val('1');
                    $('#add-to-cart-popup').text('Add to Cart');
                    $('#add-to-cart-popup').css('pointer-events', 'auto');
                })
            }
        )
        $('select').on('change', function() {
            let variant_id = this.value;

            fetch('/products/' + product_handle + '.js').then(function(response){ return response.json() }).then( 
                function(product){
                  let variant = product.variants.find(function(variant){ return variant.id == variant_id })
                    if(variant.available == false){
                        $('#add-to-cart-popup').text('Sold Out');
                        $('#add-to-cart-popup').css('pointer-events', 'none');
                    }
                    else {
                        $('#add-to-cart-popup').text('Add to Cart');
                        $('#add-to-cart-popup').css('pointer-events', 'auto');
               
                    }
                }
              )
          });

    });
});