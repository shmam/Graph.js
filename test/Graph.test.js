const Graph = require('../src/Graph');
const User = require('../src/User');
const napa = require("napajs");

const NUMBER_OF_WORKERS = 4;
var zone = napa.zone.create('zone', { workers: NUMBER_OF_WORKERS });

test('testing Graph.toString()', () =>{

    var G = new Graph();

    G.addVertex(1,[2]);
    G.addVertex(2,[3,7,9,13]);
    G.addVertex(3,[4]);
    G.addVertex(4,[5,6,7]);
    G.addVertex(5,[6]);
    G.addVertex(9,[10,7]);
    G.addVertex(10,[12,11]);
    G.addVertex(11,[12]);
    G.addVertex(13,[12,11]);
    G.addVertex(8,[7,11]);

    expect(G.toString()).toEqual("1: [2,]\n2: [1,3,7,9,13,]\n3: [2,4,]\n4: [3,5,6,7,]\n5: [4,6,]\n6: [4,5,]\n7: [2,4,9,8,]\n8: [7,11,]\n9: [2,10,7,]\n10: [9,12,11,]\n11: [10,12,13,8,]\n12: [10,11,13,]\n13: [2,12,11,]\n")

    const x = G.ajdMatrix();

    expect(G.print_ajdMatrix(x)).toEqual('|0 1 0 0 0 0 0 0 0 0 0 0 0|\n|1 0 1 0 0 0 1 0 1 0 0 0 1|\n|0 1 0 1 0 0 0 0 0 0 0 0 0|\n|0 0 1 0 1 1 1 0 0 0 0 0 0|\n|0 0 0 1 0 1 0 0 0 0 0 0 0|\n|0 0 0 1 1 0 0 0 0 0 0 0 0|\n|0 1 0 1 0 0 0 1 1 0 0 0 0|\n|0 0 0 0 0 0 1 0 0 0 1 0 0|\n|0 1 0 0 0 0 1 0 0 1 0 0 0|\n|0 0 0 0 0 0 0 0 1 0 1 1 0|\n|0 0 0 0 0 0 0 1 0 1 0 1 1|\n|0 0 0 0 0 0 0 0 0 1 1 0 1|\n|0 1 0 0 0 0 0 0 0 0 1 1 0|\n')


})



function batchUserPerformance(num){
    const n = num;
    var lib = [];
    for(var i = 0; i < n; i++){
        lib.push(new User(makeid()));
    }

    var start = new Date();
    var hrstart = process.hrtime();

    setTimeout(function (argument) {
        var G = new Graph();
        for(var i = 0; i < lib.length; i++){
            G.addVertex(lib[i],lib);
        }

        var end = new Date() - start,
            hrend = process.hrtime(hrstart);

        console.info("Execution time: %dms", end);
        console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
        const x = G.ajdMatrix();
        console.log(G.print_ajdMatrix(x))
    }, 1);




}

function makeid() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}