var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1100",
        "ok": "1091",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "1788",
        "ok": "1788",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1013",
        "ok": "1021",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "438",
        "ok": "430",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1027",
        "ok": "1028",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1275",
        "ok": "1276",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1592",
        "ok": "1593",
        "ko": "0"
    },
    "percentiles4": {
        "total": "1646",
        "ok": "1646",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 249,
        "percentage": 23
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 505,
        "percentage": 46
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 337,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 9,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "109.1",
        "ko": "0.9"
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
        "ok": "1091",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "1788",
        "ok": "1788",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1013",
        "ok": "1021",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "438",
        "ok": "430",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1027",
        "ok": "1028",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1275",
        "ok": "1276",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1592",
        "ok": "1593",
        "ko": "0"
    },
    "percentiles4": {
        "total": "1646",
        "ok": "1646",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 249,
        "percentage": 23
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 505,
        "percentage": 46
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 337,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 9,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110",
        "ok": "109.1",
        "ko": "0.9"
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
