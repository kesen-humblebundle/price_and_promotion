var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1057",
        "ok": "1057",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "318",
        "ok": "318",
        "ko": "-"
    },
    "percentiles1": {
        "total": "782",
        "ok": "782",
        "ko": "-"
    },
    "percentiles2": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1030",
        "ok": "1030",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 319,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 281,
        "percentage": 47
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    }
},
contents: {
"req_post-03d94": {
        type: "REQUEST",
        name: "Post",
path: "Post",
pathFormatted: "req_post-03d94",
stats: {
    "name": "Post",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1057",
        "ok": "1057",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "318",
        "ok": "318",
        "ko": "-"
    },
    "percentiles1": {
        "total": "782",
        "ok": "782",
        "ko": "-"
    },
    "percentiles2": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1030",
        "ok": "1030",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 319,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 281,
        "percentage": 47
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "60",
        "ko": "-"
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
