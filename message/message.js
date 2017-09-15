(function ($) {
    var Message = function (options) {
        options = options || {};
        if (typeof options === "string") {
            options = {
                message: options
            };
        }
        return new MessageConstructor(options);
    };
    Message.error = function (options) {
        if (typeof options === "string") {
            options = {
                message: options
            };
        }
        options = $.extend({},options,{type:'error'});
        return new MessageConstructor(options);
    };
    Message.warning = function (options) {
        if (typeof options === "string") {
            options = {
                message: options
            };
        }
        options = $.extend({},options,{type:'warning'});
        return new MessageConstructor(options);
    };
    Message.info = function (options) {
        if (typeof options === "string") {
            options = {
                message: options
            };
        }
        options = $.extend({},options,{type:'info'});
        return new MessageConstructor(options);
    };
    Message.success = function (options) {
        if (typeof options === "string") {
            options = {
                message: options
            };
        }
        options = $.extend({},options,{type:'success'});
        return new MessageConstructor(options);
    };
    var MessageConstructor = function (options) {
        this.options = null;
        this.$element = null;
        this.msgId = null;
        this.closed = false;
        this.timer = null;
        this.init(options);
    };
    MessageConstructor.DEFAULT = {
        type: 'info',
        customClass: '',
        duration: 3000,
        message: '',
        showClose: false,
        onClose: null
    };
    MessageConstructor.prototype.getDefault = function () {
        return MessageConstructor.DEFAULT;
    }
    MessageConstructor.prototype.getOptions = function (options) {
        return $.extend({}, this.getDefault(), options);
    }
    MessageConstructor.prototype.init = function (options) {
        this.options = this.getOptions(options);
        var msgId = 'msgId-'
        do msgId += ~~(Math.random() * 100000)
        while (document.getElementById(msgId))
        this.msgId = msgId;
        this.customClass = this.options.customClass;
        this.type = this.options.type;
        this.message = this.options.message;
        var closeBtn = "";
        if (this.options.showClose) {
            closeBtn = '<div class="jq-message__closeBtn">&times;</div>'
        }
        var msg = '<div class="jq-message begin ' + this.customClass + '" id="' + msgId + '">' +
            '<div class="jq-message__group ' + this.type + '">' + this.message + '</div>' +
            closeBtn + '</div>';
        $('body').append(msg);
        this.$element = $('#' + msgId);
        this.$closeBtn = this.$element.find('.jq-message__closeBtn');
        var self = this;
        if (this.$closeBtn.length) {
            this.$closeBtn.on('click', function () {
                self.close();
            })
        }

        setTimeout(function () {
            self.$element.removeClass('begin');
        }, 10);
        this.startTimer();
        // é¼ æ ‡hoveräº‹ä»¶
        this.$element.hover(function () {
            self.clearTimer();
        }, function () {
            self.startTimer();
        });

    };
//å…³é—­å³é”€æ¯
    MessageConstructor.prototype.close = function () {
        var self = this;
        this.closed = true;
        if (typeof this.options.onClose === 'function') {
            this.options.onClose(this);
        }
        //æ¶ˆå¤±åŠ¨ç”»ç»“æŸåŽé”€æ¯
        this.$element.addClass('jq-message-fadeOutUp').on('transitionend', function () {
            self.$element.remove();
        });
    };
    MessageConstructor.prototype.clearTimer = function () {
        clearTimeout(this.timer);
    };
    MessageConstructor.prototype.startTimer = function () {
        var self = this;
        var duration = this.options.duration;
        if (duration > 0) {
            this.timer = setTimeout(function () {
                if (!self.closed) {
                    self.close();
                }
            }, duration);
        }
    };
    $.extend({
        message: Message
    });
})(jQuery);