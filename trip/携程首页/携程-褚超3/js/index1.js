//=>插件
(function ($) {
    function pluginTab(options) {
        var $tabBox = this,
            $tabList = $tabBox.find(".tab>span"),
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
$('.mod').each(function (index) {
    switch (index) {
        case 0:
            $(this).pluginTab();
            break;
        case 1:
            $(this).pluginTab();
    }
});

