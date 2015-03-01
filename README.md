# fuzzy-scheduler

## Rationale

A scheduler maps a set of events to a set of particular times. 
A fuzzy scheduler distributes a set of events randomly over an interval.

## Usage

```
var scheduler = require('fuzzy-scheduler');
var moment = require('moment');

function ay() {
    console.log('ay lmao');
}

function ayy(lmao) {
    console.log('ayy ' + lmao);
}

function ayyy(y, lmao) {
    console.log('ayy' + y + ' ' + lmao);
}

var now = moment();
var then = moment(now).add(1, 'm');

scheduler.do(ay).count(3).between(now, then).done();
scheduler.do(ayy, "lmao").between(now, then).done();
scheduler.do(ayyy, "y", "lmao").done();
```

## Why should I care?

+ Humanize behavior
+ Evade robot detectors
+ ???

## TODO

+ Non-uniform distributions for schedule interval
+ doOneOf(...)
+ before(...)
+ maybeDo(...)
