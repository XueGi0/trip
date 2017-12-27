//=>插件
(function ($) {
    function pluginTab(options) {
        var $tabBox = this,
            $tabList = $tabBox.find(".tab1>li"),
            $conList = $tabBox.children(".con1");
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