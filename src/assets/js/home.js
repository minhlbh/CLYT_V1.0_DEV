var HomeObject = (function () {
    return {
        byWidth: function () {
            $('.grid').each(function (i, e) {
                new Packery(e, {
                    // options
                    itemSelector: '.grid-item',
                    gutter: 0,
                    horizontal: false
                });
            });

        },
        byHeight: function (id) {
            $('#'+id).each(function (i, e) {
                new Packery(e, {
                    // options
                    itemSelector: '.grid-item',
                    gutter: 0,
                    horizontal: true
                });
            });
        }
    }
})(HomeObject || {})
