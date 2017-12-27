//=>插件
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
