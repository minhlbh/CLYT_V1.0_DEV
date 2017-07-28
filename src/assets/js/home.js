var HomeObject = (function () {
    return {
        init: function () {
            $('.grid').each(function (i, e) {
                new Packery(e, {
                    // options
                    itemSelector: '.grid-item',
                    gutter: 0,
                    // horizontal: false
                });
            });

        }
    }
})(HomeObject || {})
