var moment = require('moment');

var Scheduler = function () {
    this.schedule = function(job) {
        for (var i = 0; i < job.count; i++) {
            var time = this.pluckBetween(job.start, job.end);
            var delta = time - parseInt(moment().format('x'));
            setTimeout(function() {
                job.f.apply(global, job.args);
            }, delta);

            var timeString = this.formatUnixTime(time);
            var fName = job.f.name;
            console.log("Scheduled job `%s` for %s", fName, timeString);
        }
    },

    this.pluckBetween = function(start, end) {
        return Math.floor(Math.random() * (end - start)) + start;
    },

    this.formatUnixTime = function(time) {
        return moment(time).format("ddd MMMM Do YYYY HH:mm:ss");
    }
};

module.exports = new Scheduler();
