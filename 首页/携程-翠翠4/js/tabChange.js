//=>插件
(function ($) {
    function pluginTab(options) {
        var $tabBox = this,
            $tabList = $tabBox.find(".tabList>li"),
            $conList = $tabBox.children(".imgBox");
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
            $tabList.eq(index).addClass("chose")
                .siblings().removeClass("chose");
            $conList.eq(index).addClass("select")
                .siblings().removeClass("select");
        }
    }

    $.fn.extend({pluginTab: pluginTab});
})(jQuery);
//=>使用
// $('.car').each(function (index) {
//     switch (index) {
//         case 0:
//             $(this).pluginTab();
//     }
// });