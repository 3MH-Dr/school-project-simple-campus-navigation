// 初始化地图
var map = new BMapGL.Map("container",{
        enableRotate: false,
        enableTilt: false
        });          // 创建地图实例
var point = new BMapGL.Point(121.399127,31.321896);  // 创建点坐标
map.centerAndZoom(point, 18);                 // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom();
// ===== 预定义折线路径 =====
//xinshiji
var lx11 = new BMapGL.Polyline([
		new BMapGL.Point(121.393896,31.318699),
        new BMapGL.Point(121.394426,31.318733),
        new BMapGL.Point(121.394459,31.318665),
        new BMapGL.Point(121.395525,31.318727)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l12 = new BMapGL.Polyline([
		new BMapGL.Point(121.395525,31.318727),
        new BMapGL.Point(121.395558,31.318250),
        new BMapGL.Point(121.395857,31.318238)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l2n1 = new BMapGL.Polyline([
		new BMapGL.Point(121.395857,31.318238),
        new BMapGL.Point(121.395979,31.316853)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l23 = new BMapGL.Polyline([
		new BMapGL.Point(121.395857,31.318238),
        new BMapGL.Point(121.396983,31.318408)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l34 = new BMapGL.Polyline([
		new BMapGL.Point(121.396983,31.318408),
        new BMapGL.Point(121.398624,31.318420),
        new BMapGL.Point(121.399691,31.317817),
        new BMapGL.Point(121.400082,31.317796),
        new BMapGL.Point(121.400968,31.317871)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l4m = new BMapGL.Polyline([
		new BMapGL.Point(121.400968,31.317871),
        new BMapGL.Point(121.400802,31.318167)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l45 = new BMapGL.Polyline([
		new BMapGL.Point(121.400968,31.317871),
        new BMapGL.Point(121.402262,31.317944)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l5n2 = new BMapGL.Polyline([
		new BMapGL.Point(121.402262,31.317944),
        new BMapGL.Point(121.402672,31.317450)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l5a = new BMapGL.Polyline([
		new BMapGL.Point(121.402262,31.317944),
        new BMapGL.Point(121.401576,31.318873)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lab = new BMapGL.Polyline([
		new BMapGL.Point(121.401576,31.318873),
        new BMapGL.Point(121.401230,31.319344)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lbc = new BMapGL.Polyline([
		new BMapGL.Point(121.401230,31.319344),
        new BMapGL.Point(121.400893,31.319778)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lcd = new BMapGL.Polyline([
		new BMapGL.Point(121.400893,31.319778),
        new BMapGL.Point(121.400566,31.320214)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var ldt = new BMapGL.Polyline([
		new BMapGL.Point(121.400566,31.320214),
        new BMapGL.Point(121.399193,31.321736)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lt11 = new BMapGL.Polyline([
		new BMapGL.Point(121.399193,31.321736),
        new BMapGL.Point(121.397186,31.321576)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l11s1 = new BMapGL.Polyline([
		new BMapGL.Point(121.397186,31.321576),
        new BMapGL.Point(121.396124,31.321508)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var ls110 = new BMapGL.Polyline([
		new BMapGL.Point(121.396124,31.321508),
        new BMapGL.Point(121.395015,31.321396)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l109 = new BMapGL.Polyline([
		new BMapGL.Point(121.395015,31.321396),
        new BMapGL.Point(121.395454,31.320364)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l91 = new BMapGL.Polyline([
		new BMapGL.Point(121.395454,31.320364),
        new BMapGL.Point(121.395525,31.318727)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l93 = new BMapGL.Polyline([
		new BMapGL.Point(121.395454,31.320364),
        new BMapGL.Point(121.396983,31.318408)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var ls1ss1 = new BMapGL.Polyline([
		new BMapGL.Point(121.396124,31.321508),
        new BMapGL.Point(121.396290,31.320857)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l118 = new BMapGL.Polyline([
		new BMapGL.Point(121.397186,31.321576),
        new BMapGL.Point(121.397340,31.321000),
        new BMapGL.Point(121.397778,31.320273)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l98 = new BMapGL.Polyline([
		new BMapGL.Point(121.395454,31.320364),
        new BMapGL.Point(121.395706,31.320056),
        new BMapGL.Point(121.397778,31.320273)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l87 = new BMapGL.Polyline([
		new BMapGL.Point(121.397778,31.320273),
        new BMapGL.Point(121.399526,31.319352),
        new BMapGL.Point(121.400488,31.319413)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l7c = new BMapGL.Polyline([
		new BMapGL.Point(121.400488,31.319413),
        new BMapGL.Point(121.400893,31.319778)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l7m = new BMapGL.Polyline([
		new BMapGL.Point(121.400488,31.319413),
        new BMapGL.Point(121.400802,31.318167)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l10x2 = new BMapGL.Polyline([
    new BMapGL.Point(121.395015,31.321396),
    new BMapGL.Point(121.395015,31.321396),
    new BMapGL.Point(121.394202,31.320792)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1012 = new BMapGL.Polyline([
    new BMapGL.Point(121.395015,31.321396),
    new BMapGL.Point(121.394826,31.323033)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1214 = new BMapGL.Polyline([
    new BMapGL.Point(121.394826,31.323033),
    new BMapGL.Point(121.394715,31.323764),
    new BMapGL.Point(121.395298,31.324415)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1415 = new BMapGL.Polyline([
    new BMapGL.Point(121.395298,31.324415),
    new BMapGL.Point(121.396246,31.325276)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l15b1 = new BMapGL.Polyline([
    new BMapGL.Point(121.396246,31.325276),
    new BMapGL.Point(121.395912,31.325908)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lb1y = new BMapGL.Polyline([
    new BMapGL.Point(121.395912,31.325908),
    new BMapGL.Point(121.394897,31.325720)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1516 = new BMapGL.Polyline([
    new BMapGL.Point(121.396246,31.325276),
    new BMapGL.Point(121.397722,31.325522),
    new BMapGL.Point(121.398135,31.325388)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l16c1 = new BMapGL.Polyline([
    new BMapGL.Point(121.398135,31.325388),
    new BMapGL.Point(121.399304,31.325404)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l16s2 = new BMapGL.Polyline([
    new BMapGL.Point(121.398135,31.325388),
    new BMapGL.Point(121.397928,31.325059)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1617 = new BMapGL.Polyline([
    new BMapGL.Point(121.398135,31.325388),
    new BMapGL.Point(121.399364,31.323832)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1713 = new BMapGL.Polyline([
    new BMapGL.Point(121.399364,31.323832),
    new BMapGL.Point(121.398173,31.323452),
    new BMapGL.Point(121.397321,31.322783)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lss2s3 = new BMapGL.Polyline([
    new BMapGL.Point(121.396028,31.323121),
    new BMapGL.Point(121.395627,31.323472)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l13ss2 = new BMapGL.Polyline([
    new BMapGL.Point(121.396028,31.323121),
    new BMapGL.Point(121.397096,31.323032),
    new BMapGL.Point(121.397321,31.322783)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var ls314 = new BMapGL.Polyline([
    new BMapGL.Point(121.395627,31.323472),
    new BMapGL.Point(121.395298,31.324415)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lss212 = new BMapGL.Polyline([
    new BMapGL.Point(121.396028,31.323121),
    new BMapGL.Point(121.394826,31.323033)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lss2s1 = new BMapGL.Polyline([
    new BMapGL.Point(121.396028,31.323121),
    new BMapGL.Point(121.396124,31.321508)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1311 = new BMapGL.Polyline([
    new BMapGL.Point(121.397321,31.322783),
    new BMapGL.Point(121.397173,31.322202),
    new BMapGL.Point(121.397186,31.321576)
	], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lzaj = new BMapGL.Polyline([
    new BMapGL.Point(121.402735,31.319106),
    new BMapGL.Point(121.403797,31.319792)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lbbj = new BMapGL.Polyline([
    new BMapGL.Point(121.401230,31.319344),
    new BMapGL.Point(121.403430,31.320295)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lccj = new BMapGL.Polyline([
    new BMapGL.Point(121.400893,31.319778),
    new BMapGL.Point(121.403124,31.320694)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lddj = new BMapGL.Polyline([
    new BMapGL.Point(121.400566,31.320214),
    new BMapGL.Point(121.402680,31.321235)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var leej = new BMapGL.Polyline([
    new BMapGL.Point(121.400475,31.321496),
    new BMapGL.Point(121.402129,31.321923)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lffj = new BMapGL.Polyline([
    new BMapGL.Point(121.399997,31.322089),
    new BMapGL.Point(121.401764,31.322419)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lggj = new BMapGL.Polyline([
    new BMapGL.Point(121.399426,31.322453),
    new BMapGL.Point(121.401399,31.322838)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var laz = new BMapGL.Polyline([
    new BMapGL.Point(121.401576,31.318873),
    new BMapGL.Point(121.402735,31.319106)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lz6 = new BMapGL.Polyline([
    new BMapGL.Point(121.402735,31.319106),
    new BMapGL.Point(121.403313,31.318533)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var l6aj = new BMapGL.Polyline([
    new BMapGL.Point(121.403313,31.318533),
    new BMapGL.Point(121.403797,31.319792)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lajd1 = new BMapGL.Polyline([
    new BMapGL.Point(121.403797,31.319792),
    new BMapGL.Point(121.404205,31.319949)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lajbj = new BMapGL.Polyline([
    new BMapGL.Point(121.403797,31.319792),
    new BMapGL.Point(121.403430,31.320295)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lbjcj = new BMapGL.Polyline([
    new BMapGL.Point(121.403430,31.320295),
    new BMapGL.Point(121.403124,31.320694)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lcjdj = new BMapGL.Polyline([
    new BMapGL.Point(121.403124,31.320694),
    new BMapGL.Point(121.402680,31.321235)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var ldjej = new BMapGL.Polyline([
    new BMapGL.Point(121.402680,31.321235),
    new BMapGL.Point(121.402129,31.321923)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lejfj = new BMapGL.Polyline([
    new BMapGL.Point(121.402129,31.321923),
    new BMapGL.Point(121.401764,31.322419)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lfjgj = new BMapGL.Polyline([
    new BMapGL.Point(121.401764,31.322419),
    new BMapGL.Point(121.401399,31.322838)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var ldjj = new BMapGL.Polyline([
    new BMapGL.Point(121.402680,31.321235),
    new BMapGL.Point(121.400700,31.321319)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lje = new BMapGL.Polyline([
    new BMapGL.Point(121.400700,31.321319),
    new BMapGL.Point(121.400475,31.321496)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var ldjh = new BMapGL.Polyline([
    new BMapGL.Point(121.402680,31.321235),
    new BMapGL.Point(121.403212,31.321609)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lgj19 = new BMapGL.Polyline([
    new BMapGL.Point(121.401399,31.322838),
    new BMapGL.Point(121.402523,31.324060)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lgj18 = new BMapGL.Polyline([
    new BMapGL.Point(121.401399,31.322838),
    new BMapGL.Point(121.400478,31.323924)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var l1819 = new BMapGL.Polyline([
    new BMapGL.Point(121.400478,31.323924),
    new BMapGL.Point(121.402523,31.324060)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var l19c2 = new BMapGL.Polyline([
    new BMapGL.Point(121.402523,31.324060),
    new BMapGL.Point(121.402514,31.324956)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var l19d2 = new BMapGL.Polyline([
    new BMapGL.Point(121.402523,31.324060),
    new BMapGL.Point(121.403948,31.324169)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var ltf = new BMapGL.Polyline([
    new BMapGL.Point(121.399193,31.321736),
    new BMapGL.Point(121.399997,31.322089)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lfg = new BMapGL.Polyline([
    new BMapGL.Point(121.399997,31.322089),
    new BMapGL.Point(121.399426,31.322453)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});

var lfe = new BMapGL.Polyline([
    new BMapGL.Point(121.399997,31.322089),
    new BMapGL.Point(121.400475,31.321496)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l1718 = new BMapGL.Polyline([
    new BMapGL.Point(121.399364,31.323832),  // 18 起点
    new BMapGL.Point(121.400478,31.323924)   // 19 终点
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lg17 = new BMapGL.Polyline([
    new BMapGL.Point(121.399426, 31.322453),  // g 点
    new BMapGL.Point(121.399364, 31.323832)   // 17 点
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var l56 = new BMapGL.Polyline([
    new BMapGL.Point(121.402262, 31.317944),  // 5 点
    new BMapGL.Point(121.403313, 31.318533)   // 6 点
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var lejs4 = new BMapGL.Polyline([
    new BMapGL.Point(121.402129,31.321923),  // 5 点
    new BMapGL.Point(121.402365,31.322203)
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.7});
var Elines = [];


document.getElementById("btn-reset").addEventListener("click", function(){
    Elines.forEach(function(pl){
    map.removeOverlay(window[pl]);
    });
    Elines.length = 0;
    let Time = 0;
    let Distance = 0;
    document.getElementById('timecost').innerText = `预计用时：${Time}min`;
    document.getElementById('milecost').innerText = `预计距离：${Distance}m`;
});
document.getElementById("btn-navigate").addEventListener("click", lead);
document.getElementById("walk").addEventListener("click", function(){
        document.getElementById("bike").style.backgroundColor= "#e0e0e0";
        document.getElementById("bike").style.color= "#333";
        document.getElementById("walk").style.backgroundColor= "#409EFF";
        document.getElementById("walk").style.color= "white";
        const data = {isbike: "0"};
        fetch("http://127.0.0.1:5000/changeway", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                })
        lead();
        lead();
});
document.getElementById("bike").addEventListener("click", function(){
        document.getElementById("walk").style.backgroundColor= "#e0e0e0";
        document.getElementById("walk").style.color= "#333";
        document.getElementById("bike").style.backgroundColor= "#409EFF";
        document.getElementById("bike").style.color= "white";
        const data = {isbike:"1"};
                fetch("http://127.0.0.1:5000/changeway", {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify(data)
                        })
        lead();
});

function lead(){
        Elines.forEach(function(pl){
            map.removeOverlay(window[pl]);
            });
        Elines.length = 0;
        const start = document.getElementById("start-point").value;
        const waypoint = document.getElementById("waypoint").value;
        const end = document.getElementById("end-point").value;

        const data = {start: start, waypoint: waypoint, end: end};

        fetch("http://127.0.0.1:5000/compute_route", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log("Python返回的数据：", result);
            result.result.forEach(function(pl){
                map.addOverlay(window[pl]);
                Elines.push(pl);
                });
            let Time = result.time;
            let Distance = result.cost;
            document.getElementById('timecost').innerText = `预计用时：${Time}min`;
            document.getElementById('milecost').innerText = `预计距离：${Distance}m`;
        });

}
const toggleBtn = document.getElementById("toggle-panel");
const controlPanel = document.getElementById("control-panel");

toggleBtn.addEventListener("click", () => {
    controlPanel.classList.toggle("collapsed");
});