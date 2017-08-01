var HomeObject = (function () {
    return {
        byWidth: function (id) {
            if (id == "all") {
                $('.grid').each(function (i, e) {
                    new Packery(e, {
                        itemSelector: '.grid-item',
                        gutter: 0,
                        horizontal: false
                    });
                });
            }
            else {
                $('#' + id).each(function (i, e) {
                    new Packery(e, {
                        itemSelector: '.grid-item',
                        gutter: 0,
                        horizontal: false
                    });
                });
            }

        },
        byHeight: function (id) {
            if (id == "all") {
                $('.grid').each(function (i, e) {
                    new Packery(e, {
                        itemSelector: '.grid-item',
                        gutter: 0,
                        horizontal: true
                    });
                });
            } else {
                $('#' + id).each(function (i, e) {
                    new Packery(e, {
                        itemSelector: '.grid-item',
                        gutter: 0,
                        horizontal: true
                    });
                });
            }

        }
    }
})(HomeObject || {})
