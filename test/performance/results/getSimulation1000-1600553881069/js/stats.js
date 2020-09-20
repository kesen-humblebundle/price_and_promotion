var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1100",
        "ok": "1097",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "2646",
        "ok": "2646",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1620",
        "ok": "1624",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "613",
        "ok": "608",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1660",
        "ok": "1660",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1963",
        "ok": "1963",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2511",
        "ok": "2511",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2631",
        "ok": "2631",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 93,
        "percentage": 8
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 68,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 936,
        "percentage": 85
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "109.7",
        "ko": "0.3"
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
        "ok": "1097",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "2646",
        "ok": "2646",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1620",
        "ok": "1624",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "613",
        "ok": "608",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1660",
        "ok": "1660",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1963",
        "ok": "1963",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2511",
        "ok": "2511",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2631",
        "ok": "2631",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 93,
        "percentage": 8
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 68,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 936,
        "percentage": 85
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "109.7",
        "ko": "0.3"
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
