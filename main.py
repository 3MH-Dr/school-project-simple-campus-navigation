from flask import Flask, request, jsonify
from flask_cors import CORS
from Dijkstra import DijkstraGraph
import standardization

ADJACENCY_LIST = [[['a', 0], ['b', 65], ['z', 115], ['5', 119]],
 [['b', 0], ['a', 65], ['c', 59], ['bj', 239]],
 [['c', 0], ['b', 59], ['d', 58], ['cj', 241], ['7', 59]],
 [['d', 0], ['c', 58], ['t', 212], ['dj', 246]],
 [['e', 0], ['j', 104], ['ej', 166], ['f', 102]],
 [['f', 0], ['t', 73], ['g', 45], ['e', 102], ['fj', 192]],
 [['g', 0], ['f', 45], ['gj', 170], ['17', 73]],
 [['h', 0], ['dj', 67]],
 [['aj', 0], ['z', 124], ['d1', 64], ['bj', 72], ['6', 159]],
 [['bj', 0], ['b', 239], ['aj', 72], ['cj', 58]],
 [['cj', 0], ['c', 241], ['bj', 58], ['dj', 73]],
 [['dj', 0], ['d', 246], ['cj', 73], ['ej', 89], ['j', 134], ['h', 67]],
 [['ej', 0], ['e', 102], ['dj', 89], ['fj', 192], ['s4', 31]],
 [['fj', 0], ['f', 192], ['ej', 63], ['gj', 170]],
 [['gj', 0], ['g', 170], ['fj', 55], ['19', 192], ['18', 155]],
 [['t', 0], ['d', 212], ['11', 193], ['f', 73]],
 [['s1', 0], ['11', 96], ['10', 105], ['ss1', 78], ['ss2', 113]],
 [['s2', 0], ['16', 209]],
 [['s3', 0], ['ss2', 77], ['14', 83]],
 [['s4', 0], ['ej', 31]],
 [['d1', 0], ['aj', 64]],
 [['d2', 0], ['19', 153]],
 [['x1', 0], ['1', 161]],
 [['x2', 0], ['10', 125]],
 [['n1', 0], ['2', 151]],
 [['n2', 0], ['5', 84]],
 [['b1', 0], ['15', 180], ['y', 67]],
 [['c1', 0], ['16', 83]],
 [['c2', 0], ['19', 72]],
 [['ss1', 0], ['s1', 78]],
 [['ss2', 0], ['s3', 77], ['13', 51], ['12', 82], ['s1', 113]],
 [['j', 0], ['dj', 134], ['e', 104]],
 [['m', 0], ['4', 40], ['7', 141]],
 [['z', 0], ['aj', 124], ['a', 115], ['6', 88]],
 [['y', 0], ['b1', 67]],
 [['1', 0], ['x1', 161], ['2', 82], ['9', 180]],
 [['2', 0], ['1', 82], ['n1', 151], ['3', 102]],
 [['3', 0], ['2', 102], ['4', 396], ['9', 261]],
 [['4', 0], ['3', 396], ['m', 40], ['5', 127]],
 [['5', 0], ['4', 127], ['n2', 84], ['a', 119], ['6', 123]],
 [['6', 0], ['z', 88], ['aj', 159], ['5', 123]],
 [['7', 0], ['c', 59], ['m', 141], ['8', 292]],
 [['8', 0], ['7', 292], ['9', 239], ['11', 193]],
 [['9', 0], ['10', 125], ['8', 239], ['1', 180], ['3', 261]],
 [['10', 0], ['s1', 105], ['9', 125], ['x2', 125], ['12', 125]],
 [['11', 0], ['t', 193], ['s1', 96], ['13', 51], ['8', 193]],
 [['12', 0], ['10', 125], ['14', 172], ['ss2', 113]],
 [['13', 0], ['17', 237], ['ss2', 151], ['11', 51]],
 [['14', 0], ['12', 82], ['15', 131], ['s3', 83]],
 [['15', 0], ['14', 180], ['b1', 80], ['16', 180]],
 [['16', 0], ['15', 180], ['c1', 83], ['s2', 209], ['17', 209]],
 [['17', 0], ['16', 209], ['13', 51], ['18', 101], ['g', 73]],
 [['18', 0], ['17', 155], ['19', 198], ['gj', 155]],
 [['19', 0], ['18', 198], ['c2', 72], ['d2', 153], ['gj', 192]],
 [['20', 0]]]
isbike = True

app = Flask(__name__)
CORS(app)  # 允许所有跨域请求

@app.route("/compute_route", methods=["POST"])
def compute_route():
    print("Received request")
    data = request.json
    print(f"Request data: {data}")
    start = data["start"]
    waypoint = data["waypoint"]
    end = data["end"]
    g = DijkstraGraph(ADJACENCY_LIST)
    print("Graph created successfully")
    s_idx=g.idx(start)
    w_idx=g.idx(waypoint)
    e_idx=g.idx(end)
    if(waypoint=="无"):
        path, dist = g.shortest_path(s_idx,e_idx)
        print("path:",path)
        cost = dist
        print(isbike)
        if isbike:
            time = cost*0.004
        else:
            time = cost*0.0152
        result = {
            "result":standardization.standardize(path),
            "cost":cost,
            "time":round(time,1)
        }
        return jsonify(result)
    else:
        path1, dist1 = g.shortest_path(s_idx, w_idx)
        path2, dist2 = g.shortest_path(w_idx, e_idx)
        path = path1 + path2
        print("path:", path)
        cost = dist1+dist2
        if isbike:
            time = cost*0.004
        else:
            time = cost*0.0152
        result = {
            "result": standardization.standardize(path),
            "cost": cost,
            "time": round(time,1)
        }
        return jsonify(result)
@app.route("/changeway", methods=["POST"])
def changeway():
    data = request.json
    global isbike
    if data['isbike'] == "1":
        isbike = True
    else:
        isbike = False
    return jsonify({"msg": "Walk selected"})
app.run(port=5000)
