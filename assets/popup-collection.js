let actions = document.querySelectorAll(".popup-collection");
actions.forEach((event) => {
    event.addEventListener("click", (e) => {
        e.preventDefault();
        const variant_id = event.getAttribute('item-id');
        const product_handle = event.getAttribute('handle_product');
        fetch('/products/' + product_handle + '.js').then(function (response) { return response.json() }).then(
            function (product) {
                let variant = product.variants.find(function (variant) { return variant.id == variant_id })
               console.log(variant);
            }
        )

    });
});