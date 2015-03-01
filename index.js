var moment = require('moment');
var scheduler = require('./scheduler');

var Fuzzy = function() {
    this.defaultJob = function () {
        var now = moment();
        return {
            f: function () {},
            args: [],
            count: 1,
            start: now,
            end: moment(now),
        };
    }

    this.job = this.defaultJob();
    this.scheduler = scheduler;

    this.do = function(f) {
        var argsLength = arguments.length;
        if (argsLength > 1) {
            for (var i = 1; i < argsLength; i++) {
                this.job.args.push(arguments[i]);
            }
        }
        this.job.f = f;
        return this;
    },

    this.count = function(n) {
        this.job.count = parseInt(n);
        return this;
    },

    this.between = function(start, end) {
        this.job.start = parseInt(start.format('x'));
        this.job.end = parseInt(end.format('x'));
        return this;
    },

    this.done = function() {
        this.scheduler.schedule(this.job);    
        this.job = this.defaultJob();
        return this;
    }
};

module.exports = new Fuzzy();
