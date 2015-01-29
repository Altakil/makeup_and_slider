$(function () {

    var i;
    i = 0;
    var image = $("img", "div.slide-show"),
        leftButton = $("#leftButton"),
        rightButton = $("#rightButton"),
        button = $("div.button");

    image.fadeOut(1);
    $(image.get(0)).fadeIn(1);
    button.eq(0).css({"backgroundColor": "#e2534b"});

    var SetIt = setInterval(f, 5000);

    function f() {
        clearInterval(SetIt);

        if (i == 0) {
            i++;
            $(image.get(i - 1)).fadeOut(3000);
            $(image.get(i)).fadeIn(3000);
            button.eq(i - 1).css({"backgroundColor": "#b0b8b9"});
            button.eq(i).css({"backgroundColor": "#e2534b"});
        }
        else if ((i > 0) && (i < image.length - 1)) {
            button.eq(i).css({"backgroundColor": "#b0b8b9"});
            $(image.get(i)).fadeOut(3000);
            i++;
            $(image.get(i)).fadeIn(3000);
            button.eq(i).css({"backgroundColor": "#e2534b"});
        }
        else if ((i > 0) && (i == image.length - 1)) {
            button.eq(i).css({"backgroundColor": "#b0b8b9"});
            button.eq(0).css({"backgroundColor": "#e2534b"});

            $(image.get(i)).fadeOut(3000);
            $(image.get(0)).fadeIn(3000);

            i = 0;

        }

        SetIt = setInterval(f, 5000);
    }

    function f_r() {
        clearInterval(SetIt);
        if (i == 0) {
            i++;
            button.eq(i - 1).css({"backgroundColor": "#b0b8b9"});
            button.eq(i).css({"backgroundColor": "#e2534b"});
            $(image.get(i - 1)).fadeOut(1000);
            $(image.get(i)).fadeIn(1000);
        }
        else if ((i > 0) && (i < image.length - 1)) {
            button.eq(i).css({"backgroundColor": "#b0b8b9"});
            $(image.get(i)).fadeOut(1000);
            i++;
            $(image.get(i)).fadeIn(1000);
            button.eq(i).css({"backgroundColor": "#e2534b"});
        }
        else if ((i > 0) && (i == image.length - 1)) {
            button.eq(i).css({"backgroundColor": "#b0b8b9"});
            button.eq(0).css({"backgroundColor": "#e2534b"});

            $(image.get(i)).fadeOut(1000);
            $(image.get(0)).fadeIn(1000);

            i = 0;
        }

        SetIt = setInterval(f, 5000);
    }


    leftButton.click(
        function f_l() {
            clearInterval(SetIt);
            if (i == 0) {
                button.eq(i).css({"backgroundColor": "#b0b8b9"});
                $(image.get(i)).fadeOut(1000);
                i = image.length - 1;
                $(image.get(i)).fadeIn(1000);
                button.eq(i).css({"backgroundColor": "#e2534b"});
            }
            else if ((i > 0)) {
                button.eq(i).css({"backgroundColor": "#b0b8b9"});
                $(image.get(i)).fadeOut(1000);
                i--;
                $(image.get(i)).fadeIn(1000);
                button.eq(i).css({"backgroundColor": "#e2534b"});
            }
            SetIt = setInterval(f, 5000);
        }
    );

    button.click(function () {
        clearInterval(SetIt);
        var index = $(this).index();
        $(image.get(i)).fadeOut(1000);
        $("div.button").eq(i).css({"backgroundColor": "#b0b8b9"});

        $(this).css({"backgroundColor": "#e2534b"});
        $(image.get(index)).fadeIn(1000);
        i = index;
        SetIt = setInterval(f, 5000);
    });


    rightButton.click(f_r);


    var h = $('div.block').eq(0).height();
    $('div.block').each(function () {
        if ($(this).height() > h) {
            h = $(this).height();
        }
    });
    $('div.block').each(function () {
        $(this).height(h);
    });


    for (var j = 0; j < 3; j++) {
        var x;
        x = j * 300;
        $("img", "#slideSecond").eq(j).css({"width": "50%"});
        $("img", "#slideSecond").eq(j).css({"left": x});

    }

    $("img", "#slideSecond").eq(1).css({"width": "70%", "zIndex": "15", "left": "250px", "top": "-50px"}).addClass("new");

    $("img", "#slideSecond").click(function () {


        $("img", "#slideSecond").filter('.new').animate({
            "width": "50%",
            "left": $(this).css("left"),
            "zIndex": "2",
            "top": 0
        }).removeClass("new");

        $(this).animate({"width": "70%", "zIndex": "15", "left": "250px", "top": "-50px"}).addClass("new");

    });


    $('a.show-menu-link').click(function (eventObject) {
        eventObject.preventDefault();
        $("#menu").toggle(1000);
    });

});