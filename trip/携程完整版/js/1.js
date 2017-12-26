~function () {
    let $searchBox = $('.searchBox'),
        $input = $searchBox.find('input');
    $input.on('click', function () {
        $(this).attr('value', '');
    })
}();

//->banner
~function ($) {
    let $container = $('.container'),
        $wrapper = $container.children('.wrapper'),
        $focusBox = $container.children('.focusBox');
    let $slideList = null,
        $imgList = null,
        $focusList = null,
        bannerData = null;
    let _default = {
        initIndex: 0,
        autoInterval: 2000,
        showFocus: true,
        needFocus: true,
        eventFocus: 'mouseenter',
        needAuto: true,
        url: null
    };
    let initIndex = _default.initIndex,
        autoInterval = _default.autoInterval,
        showFocus = _default.showFocus,
        needFocus = _default.needFocus,
        eventFocus = _default.eventFocus,
        needAuto = _default.needAuto;
    ~function () {
        $.ajax({
            url: 'json/banner.json',
            method: 'get',
            dataType: 'json',
            async: false,
            success: function (result) {
                bannerData = result;
            }
        });
        console.log(bannerData);
        let str = ``,
            strFocus = ``;
        $.each(bannerData, function (index, item) {
            str += `<li class="slide">
                <img src="" data-img="${item.img}" alt="">
            </li>`;

            if (showFocus) {
                strFocus += `<li></li>`;
            }
        });
        $wrapper.html(str);
        showFocus ? $focusBox.html(strFocus) : null;
        $slideList = $wrapper.children();
        $imgList = $wrapper.find('img');
        showFocus ? $focusList = $focusBox.children() : null;
    }();
    ~function () {
        $slideList.css({
            opacity: 0,
            zIndex: 0
        }).eq(initIndex).css({
            opacity: 1,
            zIndex: 1
        });

        if (showFocus) {
            $focusList.removeClass('select')
                .eq(initIndex).addClass('select');
        }
    }();
    $(window).on('load', function () {
        $imgList.each(function (index, item) {
            let tempImg = new Image;
            tempImg.onload = function () {
                item.src = this.src;
                item.style.display = 'block';
                tempImg = null;
            };
            tempImg.src = $(item).data('img')
        });
    });
    let autoTimer = null,
        count = bannerData.length;
    needAuto ? autoTimer = setInterval(autoMove, autoInterval) : null;

    function autoMove() {
        initIndex++;
        initIndex === count ? initIndex = 0 : null;
        change();
    }

    $container.on('mouseenter', function () {
        needAuto ? clearInterval(autoTimer) : null;
    });
    $container.on('mouseleave', function () {
        needAuto ? autoTimer = setInterval(autoMove, autoInterval) : null;
    });
    if (showFocus && needFocus) {
        $focusList.on(eventFocus, function () {
            initIndex = $(this).index();
            change();
        });
    }

    function change() {
        let $curSlide = $slideList.eq(initIndex);
        $curSlide.css('zIndex', 1)
            .siblings().css('zIndex', 0);
        $curSlide.stop().animate({opacity: 1}, 200, function () {
            $curSlide.siblings().css('opacity', 0);
        });
        if (showFocus) {
            $focusList.eq(initIndex).addClass('select')
                .siblings().removeClass('select');
        }
    }


}(jQuery);
//->tab
~function ($) {

    let $searchBox = $('.searchBox'),
        $searchList = $searchBox.find('.searchnav>li'),
        $searchCon = $searchBox.find('.tabBox');
    $searchList.on('click', function () {
        let $this = $(this),
            index = $this.index();
        $searchList.eq(index).addClass('select')
            .siblings().removeClass('select');
        $searchCon.eq(index).addClass('reveal')
            .siblings().removeClass('reveal');
    });

    let $hotelBox = $('.hotel'),
        $tabList = $hotelBox.find('.tab>li'),
        $conList = $hotelBox.find('.con');
    $tabList.on('click', function () {
        let $this = $(this),
            index = $this.index();
        $tabList.eq(index).addClass('select')
            .siblings().removeClass('select');
        $conList.eq(index).addClass('select')
            .siblings().removeClass('select');
    });

    let $airBox = $('.airticket'),
        $airList = $airBox.find('.tab>li'),
        $airCon = $airBox.find('.con');
    $airList.on('click', function () {
        let $this = $(this),
            index = $this.index();
        $airList.eq(index).addClass('select')
            .siblings().removeClass('select');
        $airCon.eq(index).addClass('select')
            .siblings().removeClass('select');
    });

    let $free = $('.free'),
        $freeList = $free.find('.tab>li'),
        $freeCon = $free.find('.con');
    $freeList.on('click', function () {
        let $this = $(this),
            index = $this.index();
        $freeList.eq(index).addClass('select')
            .siblings().removeClass('select');
        $freeCon.eq(index).addClass('select')
            .siblings().removeClass('select');
    });

    let $trainBox = $('.trainBox'),
        $trainList = $trainBox.find('.tab>li'),
        $trainCon = $trainBox.find('.con');
    $trainList.on('click', function () {
        let $this = $(this),
            index = $this.index();
        $trainList.eq(index).addClass('select')
            .siblings().removeClass('select');
        $trainCon.eq(index).addClass('select')
            .siblings().removeClass('select');
    });

    let $carBox = $('.carBox'),
        $carList = $carBox.find('.tab>li'),
        $carCon = $carBox.find('.con');
    $carList.on('click', function () {
        let $this = $(this),
            index = $this.index();
        $carList.eq(index).addClass('select')
            .siblings().removeClass('select');
        $carCon.eq(index).addClass('select')
            .siblings().removeClass('select');
    });


}(jQuery);
//->tickets
~function ($) {
    let $ticketType = $('#ticketType'),
        $ticketHome = $('.tickethome'),
        $ticketLabel = $ticketType.find('.tichide'),
        $ticshow = $('.ticshow'),
        $airticket = $('.airticket'),
        $searchBox = $('.searchBox'),
        $buttonBox = $ticketHome.find('.buttonBox'),
        $subtab = $('.subtab'),
        $babyshow = $('.babyshow'),
        $babyshowA = $babyshow.find('a');
    let $item3 = $ticketHome.find('.item3'),
        $item4 = $ticketHome.find('.item4');
    let $details1 = $('#hideDetails-1'),
        $details2 = $('#hideDetails-2');
    $ticketLabel.on('mouseenter', function () {
        $details1.css('display', 'block')
    });
    $ticketLabel.on('mouseleave', function () {
        $details1.css('display', 'none')
    });
    $ticketLabel.on('click', function () {
        $airticket.css('width', '755px');
        $buttonBox.css({
            height: '33px',
            right: '41px'
        });
        $subtab.css('width', '755px');
        $searchBox.css('width', '870px');
        $item3.css('display', 'none');
        $item4.css('display', 'block');
    });
    $ticshow.on('click', function () {
        $airticket.css('width', '451px');
        $buttonBox.css({
            height: '74px',
            right: '20px'
        });
        $subtab.css('width', '451px');
        $searchBox.css('width', '580px');
        $item3.css('display', 'block');
        $item4.css('display', 'none');
    });
    $babyshowA.on('mouseenter', function () {
        $details2.css('display', 'block')
    });
    $babyshowA.on('mouseleave', function () {
        $details2.css('display', 'none')
    });
}(jQuery);

~function () {
    let $advanced = $('.advanced'),
        $triangle = $advanced.find('.triangle'),
        $searchBox = $('.searchBox'),
        $searchnav = $searchBox.find('.searchnav'),
        $airticket = $searchBox.find('.airticket'),
        $options = $searchBox.find('.options');
    let flag = false;
    $advanced.on('click', function (e) {
        e.stopPropagation();
        if (!flag) {
            $triangle.css({
                borderTop: '0',
                borderBottom: '5px solid #3983e4',
            });
            $options.css({
                height: '42px',
                display: 'block',
                paddingTop: '10px'
            });
            $searchBox.css({
                height: '420px'
            });
            $searchnav.css({
                height: '420px'
            });
            $airticket.css({
                height: '376px'
            });
            flag = true;
        } else {
            $triangle.css({
                borderTop: '5px solid #3983e4',
                borderBottom: '0',
            });
            $options.css({
                height: '0',
                display: 'none',
                paddingTop: '0'
            });
            $searchBox.css({
                height: '300px'
            });
            $searchnav.css({
                height: '300px'
            });
            $airticket.css({
                height: '275px'
            });
            flag = false;
        }
    })
}();
~function () {
    let $trainBox = $('.trainBox'),
        $ticshow = $trainBox.find('.type>.ticshow'),
        $itemchange = $('#itemchange'),
        $changeList = $itemchange.find('.item2');
    $ticshow.on('click', function () {
        let $this = $(this),
            index = $this.index();
        $changeList.eq(index).addClass('itemshow')
            .siblings().removeClass('itemshow');
    })

}();

(function ($) {
    function pluginTab(options) {
        var $tabBox = this,
            $tabList = $tabBox.find(".tab>li"),
            $conList = $tabBox.children(".con");
        var _default = {
            initIndex: 0,
            eventType: "click"
        };
        options && $.each(options, function (key, value) {
            if (options.hasOwnProperty(key)) _default[key] = value;
        });
        change(_default.initIndex);
        $tabList.on(_default.eventType, function () {
            var $this = $(this),
                index = $this.index();
            change(index);
        });

        function change(index) {
            $tabList.eq(index).addClass("select")
                .siblings().removeClass("select");
            $conList.eq(index).addClass("select")
                .siblings().removeClass("select");
        }
    }

    $.fn.extend({pluginTab: pluginTab});
})(jQuery);
//=>使用
$('.special').each(function (index) {
    switch (index) {
        case 0:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 1:
            $(this).pluginTab({
                initIndex: 0
            });
    }
});

(function ($) {
    function pluginTab(options) {
        var $tabBox = this,
            $tabList = $tabBox.find(".in_tab>li"),
            $conList = $tabBox.children(".in_con");
        var _default = {
            initIndex: 0,
            eventType: "click"
        };
        options && $.each(options, function (key, value) {
            if (options.hasOwnProperty(key)) _default[key] = value;
        });
        change(_default.initIndex);
        $tabList.on(_default.eventType, function () {
            var $this = $(this),
                index = $this.index();
            change(index);
        });

        function change(index) {
            $tabList.eq(index).addClass("in_select")
                .siblings().removeClass("in_select");
            $conList.eq(index).addClass("in_select")
                .siblings().removeClass("in_select");
        }
    }

    $.fn.extend({pluginTab: pluginTab});
})(jQuery);
//=>使用
$('.con1').each(function (index) {
    switch (index) {
        case 0:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 1:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 2:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 3:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 4:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 5:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 6:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 7:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 8:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 9:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 10:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 11:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 12:
            $(this).pluginTab({
                initIndex: 0
            });
            break;
        case 13:
            $(this).pluginTab({
                initIndex: 0
            });
    }
});

$('.title span').click(function () {
    if ($(this).index()) {
        $('.detail-last').show();
        $('.detail-first').hide();
    } else {
        $('.detail-last').hide();
        $('.detail-first').show();
    }
    $(this).addClass('current').siblings().removeClass();
});
$('.detail .city li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $(this).parent().next().children().eq(index).show().siblings().hide();
});
$('.dropDown-toggle').click(function (e) {
    e.stopPropagation();
    $('.dropDown-cont').slideToggle();
    $('.dropDown').toggleClass('open')
});

$('body').click(function () {
    $('.dropDown-cont').slideUp();
    $('.dropDown').addClass('open');
});
$('.cooperation-lastA').click(function () {
    $('.cooperation-lastA').remove();
    $('#bottom').show();
});


(function ($) {
    function pluginTab(options) {
        let $tabBox = this,
            $tabList = $tabBox.find(".tab>li"),
            $conList = $tabBox.children(".con");
        let _default = {
            initIndex: 0,
            eventType: "click"
        };
        options && $.each(options, function (key, value) {
            if (options.hasOwnProperty(key)) _default[key] = value;
        });
        change(_default.initIndex);
        $tabList.on(_default.eventType, function () {
            let $this = $(this),
                index = $this.index();
            change(index);
        });

        function change(index) {
            $tabList.eq(index).addClass("select")
                .siblings().removeClass("select");
            $conList.eq(index).addClass("select")
                .siblings().removeClass("select");
        }
    }

    $.fn.extend({pluginTab: pluginTab});
})(jQuery);
//=>使用
$('.mod').each(function (index) {
    switch (index) {
        case 0:
            $(this).pluginTab();
            break;
        case 1:
            $(this).pluginTab();
    }
});
(function ($) {
    function pluginTab(options) {
        let $tabBox = this,
            $tabList = $tabBox.find(".tab1>li"),
            $conList = $tabBox.children(".con1");
        let _default = {
            initIndex: 0,
            eventType: "click"
        };
        options && $.each(options, function (key, value) {
            if (options.hasOwnProperty(key)) _default[key] = value;
        });
        change(_default.initIndex);
        $tabList.on(_default.eventType, function () {
            let $this = $(this),
                index = $this.index();
            change(index);
        });

        function change(index) {
            $tabList.eq(index).addClass(" select")
                .siblings().removeClass(" select");
            $conList.eq(index).addClass(" select")
                .siblings().removeClass(" select");
        }
    }

    $.fn.extend({pluginTab: pluginTab});
})(jQuery);
//=>使用
$('.product').each(function (index) {
    switch (index) {
        case 0:
            $(this).pluginTab();
            break;
        case 1:
            $(this).pluginTab();
            break;
        case 2:
            $(this).pluginTab();
            break;
        case 3:
            $(this).pluginTab();
            break;
        case 4:
            $(this).pluginTab();
            break;
        case 5:
            $(this).pluginTab();
            break;
        case 6:
            $(this).pluginTab();
    }
});

(function ($) {
    function pluginTab(options) {
        let $tabBox = this,
            $tabList = $tabBox.find(".tabList>li"),
            $conList = $tabBox.children(".imgBox");
        let _default = {
            initIndex: 0,
            eventType: "click"
        };
        options && $.each(options, function (key, value) {
            if (options.hasOwnProperty(key)) _default[key] = value;
        });
        change(_default.initIndex);
        $tabList.on(_default.eventType, function () {
            let $this = $(this),
                index = $this.index();
            change(index);
        });

        function change(index) {
            $tabList.eq(index).addClass("chose")
                .siblings().removeClass("chose");
            $conList.eq(index).addClass("select")
                .siblings().removeClass("select");
        }
    }

    $.fn.extend({pluginTab: pluginTab});
})(jQuery);


let tabChange = (function () {
    let tabBox = document.getElementById('tabList'),
        tabList = tabBox.getElementsByTagName('li'),
        imgBox = document.getElementsByClassName('imgBox1');
    let tabBox2 = document.getElementById('tabList2'),
        tabList2 = tabBox2.getElementsByTagName('li'),
        imgBox2 = document.getElementsByClassName('imgBox2');
    imgBox = utils.toArray(imgBox);
    imgBox2 = utils.toArray(imgBox2);
    let headerBox = document.getElementById('guide'),
        smallHeader = headerBox.getElementsByClassName('smallHeader'),
        guideBody1 = headerBox.getElementsByClassName('buyBody'),
        guideBody2 = headerBox.getElementsByClassName('travel');
    smallHeader = utils.toArray(smallHeader);
    guideBody1 = utils.toArray(guideBody1);
    guideBody2 = utils.toArray(guideBody2);

    function change() {
        for (let i = 0; i < tabList.length; i++) {
            let item = tabList[i];

            item.onclick = function () {
                imgBox[i].style.display = 'block';
                item.className = 'chose';
                for (let j = 0; j < imgBox.length; j++) {
                    if (i !== j) {
                        imgBox[j].style.display = 'none';
                        tabList[j].className = 'null';
                    }
                }
            }

        }
    }

    function change2() {
        for (let i = 0; i < tabList2.length; i++) {
            let item = tabList2[i];

            item.onclick = function () {
                imgBox2[i].style.display = 'block';
                tabList2[i].className = 'chose';
                console.log(i);
                for (let j = 0; j < imgBox2.length; j++) {
                    if (i !== j) {
                        imgBox2[j].style.display = 'none';
                        tabList2[j].className = null;
                    }
                }
            }

        }
    }

    function changeGuide() {
        let triangle1 = smallHeader[0].getElementsByTagName('i')[0];
        let triangle2 = smallHeader[1].getElementsByTagName('i')[0];

        for (let f = 0; f < smallHeader.length; f++) {
            smallHeader[f].onclick = function () {
                if (f === 0) {
                    guideBody1[0].style.display = 'block';
                    smallHeader[0].className += ' select';
                    triangle1.style.display = 'block';
                    triangle2.style.display = 'none';
                    guideBody2[0].style.display = 'none';
                    smallHeader[1].className = ' smallHeader';
                } else {
                    guideBody1[0].style.display = 'none';
                    smallHeader[0].className = ' smallHeader';
                    guideBody2[0].style.display = 'block';
                    smallHeader[1].className += ' select';
                    triangle2.style.display = 'block';
                    triangle1.style.display = 'none';
                }
            }

        }
    }

    return {
        init: function () {
            change();
            change2();
            changeGuide();
        }
    }
})();
tabChange.init();

//电梯
~function ($) {
    let lift = document.getElementById('lift');
    let curT = document.documentElement.scrollTop,
        winH = document.documentElement.clientHeight;
    let liftItem = lift.getElementsByTagName('li');
    liftItem[0].dataTop=350;
    liftItem[1].dataTop=750;
    liftItem[2].dataTop=1300;
    liftItem[3].dataTop=1700;
    liftItem[4].dataTop=2000;
    liftItem[5].dataTop=2300;
    liftItem[6].dataTop=2650;
    liftItem[7].dataTop=2840;
    liftItem[8].dataTop=3050;
    //点击事件
    function linear(t, b, c, d) {
        return t / d * c + b;
    }
    for (let i = 0; i < liftItem.length; i++) {
        let item = liftItem[i];
        let $item = $(item);

        $item.on('click', function () {
            $item.addClass('mix_active');
            $item.siblings().removeClass('mix_active');

            let time = 0,
                duration = 500,
                begin = utils.winBox('scrollTop'),
                target = $item[0].dataTop,
                change = target - begin;
            $item[0].timer = setInterval(function () {
                time += 17;
                if (time >= duration) {
                    utils.winBox('scrollTop', target);
                    clearInterval($item[0].timer);
                    return;
                }
                let nowT = linear(time, begin, change, duration);
                utils.winBox('scrollTop', nowT);
            }, 17);
        });
    }

    if (curT >= winH) {
        lift.style.top = '200px';
    }
    $(window).on('scroll', function () {
        let curT = document.documentElement.scrollTop;
        lift.timer = setTimeout(move, 17);

        if (curT <= 600) {
            $(liftItem[0]).addClass('mix_active');
            $(liftItem[0]).siblings().removeClass('mix_active');
            return;
        }
        if (600 < curT && curT <= 1100) {
            $(liftItem[1]).addClass('mix_active');
            $(liftItem[1]).siblings().removeClass('mix_active');
            return;
        }
        if (1100 < curT && curT <= 1600) {
            $(liftItem[2]).addClass('mix_active');
            $(liftItem[2]).siblings().removeClass('mix_active');
            return;
        }
        if (1600 < curT && curT <= 2000) {
            $(liftItem[3]).addClass('mix_active');
            $(liftItem[3]).siblings().removeClass('mix_active');
            return;
        }
        if (2000 < curT && curT <= 2300) {
            $(liftItem[4]).addClass('mix_active');
            $(liftItem[4]).siblings().removeClass('mix_active');
            return;
        }
        if (2300 < curT && curT <= 2600) {
            $(liftItem[5]).addClass('mix_active');
            $(liftItem[5]).siblings().removeClass('mix_active');
            return;
        }
        if (2600 < curT && curT <= 2800) {
            $(liftItem[6]).addClass('mix_active');
            $(liftItem[6]).siblings().removeClass('mix_active');
            return;
        }
        if (2800 < curT && curT <= 3000) {
            console.log('ok');
            $(liftItem[7]).addClass('mix_active');
            $(liftItem[7]).siblings().removeClass('mix_active');
            return;
        }
        if (3000 < curT && curT <= 3400) {
            console.log('ok');
            $(liftItem[8]).addClass('mix_active');
            $(liftItem[8]).siblings().removeClass('mix_active');
            return;
        }
        if (curT > 3400) return;
    });


    function move() {
        let curT = document.documentElement.scrollTop,
            winH = document.documentElement.clientHeight;
        let temp = 516 - curT / 2;
        if (curT >= winH) {
            //=>动画结束
            lift.style.top = '200px';
            clearInterval(lift.timer);
            return;
        }
        lift.style.top = temp + 'px';
    }
}(jQuery);