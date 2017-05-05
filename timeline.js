/**
 * Created by Leetao on 2017/5/5.
 */

;(function ($, window, document, undefined) {
    "use strict";
    var defaults = {
        contents: [
            {
                "date": "2017-05-04",
                "img": "source/imgs/star.svg",
                "content": "测试内容"
            }
        ],
        styles:".timeline .timeline-item:after,.timeline .timeline-item:before{content:'';display:block;width:100%;clear:both}*,:after,:before{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}body,html{height:100%}body{background:#f9f9f9;background-size:cover;margin:0;padding:0;font-family:helvetica,arial,tahoma,verdana;line-height:20px;font-size:14px;color:#726f77;-webkit-font-smoothing:antialiased}img{max-width:100%}a{text-decoration:none}.container{max-width:825pt;margin:0 auto}h1,h2,h3,h4{font-family:Dosis,arial,tahoma,verdana;font-weight:600}.timeline{width:90%;margin:30px auto;position:relative;-webkit-transition:all .4s ease;transition:all .4s ease}.timeline:before{content:'';width:3px;height:100%;background:#ee4d4d;left:50%;top:0;position:absolute}.timeline:after{content:'';clear:both;display:table;width:100%}.timeline .timeline-item{margin-bottom:50px;position:relative}.timeline .timeline-item .timeline-icon{background:#ee4d4d;width:50px;height:50px;position:absolute;top:0;left:50%;overflow:hidden;margin-left:-23px;border-radius:50%}.timeline .timeline-item .timeline-icon img{position:relative;top:14px;left:14px}.timeline .timeline-item .timeline-content{width:45%;background:#fff;padding:20px;-ms-box-shadow:0 3px 0 rgba(0,0,0,.1);box-shadow:0 3px 0 rgba(0,0,0,.1);border-radius:5px;-webkit-transition:all .3s ease;transition:all .3s ease}.timeline .timeline-item .timeline-content h2{padding:15px;background:#ee4d4d;color:#fff;margin:-20px -20px 0;font-weight:500;border-radius:3px 3px 0 0}.timeline .timeline-item .timeline-content:before{content:'';position:absolute;left:45%;top:20px;width:0;height:0;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #ee4d4d}.timeline .timeline-item .timeline-content.right{float:right}.timeline .timeline-item .timeline-content.right:before{content:'';right:45%;left:inherit;border-left:0;border-right:7px solid #ee4d4d}.btn{padding:5px 15px;text-decoration:none;background:0 0;border:2px solid #f27c7c;color:#f27c7c;display:inline-block;position:relative;text-transform:uppercase;font-size:9pt;border-radius:5px;-webkit-transition:background .3s ease;transition:background .3s ease;-ms-box-shadow:2px 2px 0 #f27c7c;box-shadow:2px 2px 0 #f27c7c}.btn:hover{box-shadow:none;top:2px;left:2px;-ms-box-shadow:2px 2px 0 transparent;box-shadow:2px 2px 0 transparent}@media screen and (max-width:768px){.timeline{margin:30px;padding:0}.timeline:before{left:0}.timeline .timeline-item .timeline-content{width:90%;float:right}.timeline .timeline-item .timeline-content.right:before,.timeline .timeline-item .timeline-content:before{left:10%;margin-left:-6px;border-left:0;border-right:7px solid #ee4d4d}.timeline .timeline-item .timeline-icon{left:0}}"
    };

    function Timeliner($ele, options) {
        this.$ele = $ele;
        this.options = options = $.extend(defaults, options || {});
        this.init();
    }

    Timeliner.prototype = {
        constructor: Timeliner,
        init: function () {
            this.renderHtml();
        },
        renderHtml: function () {
            var options = this.options;
            var content = options.contents;
            var html = [];
            var len = content.length;

            for (var i = 0; i < len; i++) {
                html.push('<div class="timeline-item"><div class="timeline-icon"><img src="' + content[i].img + '"></div><div class="timeline-content"><h2>' + content[i].date + '</h2><p>' + content[i].content + '</p>');
            }
            var style = "<style>"+options.styles+"</style>";
            this.$ele.html(style+'<div class="container"><div class="timeline">' + html.join("") + '</div></div>');
        }
    };

    $.fn.timeliner = function (options) {
        options = $.extend(defaults, options || {});
        return new Timeliner($(this), options);
    }

})(jQuery, window, document);