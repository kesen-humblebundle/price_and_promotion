var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35409",
        "ok": "35408",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "631",
        "ok": "631",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "0"
    },
    "percentiles4": {
        "total": "429",
        "ok": "429",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35408,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28.214",
        "ok": "28.214",
        "ko": "0.001"
    }
},
contents: {
"req_get-c5558": {
        type: "REQUEST",
        name: "Get",
path: "Get",
pathFormatted: "req_get-c5558",
stats: {
    "name": "Get",
    "numberOfRequests": {
        "total": "35409",
        "ok": "35408",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "631",
        "ok": "631",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "0"
    },
    "percentiles4": {
        "total": "429",
        "ok": "429",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35408,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28.214",
        "ok": "28.214",
        "ko": "0.001"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
