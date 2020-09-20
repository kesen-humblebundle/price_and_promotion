var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1100",
        "ok": "1083",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "1664",
        "ok": "1664",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "867",
        "ok": "881",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "446",
        "ok": "436",
        "ko": "0"
    },
    "percentiles1": {
        "total": "963",
        "ok": "963",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1134",
        "ok": "1219",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1441",
        "ok": "1441",
        "ko": "0"
    },
    "percentiles4": {
        "total": "1610",
        "ok": "1610",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 442,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 369,
        "percentage": 34
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 272,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 17,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "108.3",
        "ko": "1.7"
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
        "total": "1100",
        "ok": "1083",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "1664",
        "ok": "1664",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "867",
        "ok": "881",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "446",
        "ok": "436",
        "ko": "0"
    },
    "percentiles1": {
        "total": "963",
        "ok": "963",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1134",
        "ok": "1219",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1441",
        "ok": "1441",
        "ko": "0"
    },
    "percentiles4": {
        "total": "1610",
        "ok": "1610",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 442,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 369,
        "percentage": 34
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 272,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 17,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "108.3",
        "ko": "1.7"
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
