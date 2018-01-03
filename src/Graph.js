const Vertex = require('./Vertex');
const SortedArrayList = require('./SortedArrayList'); 

module.exports = class Graph{
    constructor(){
        this.vertexSet = new SortedArrayList(); 
    }


    addVertex(data, adjv){
        var v = new Vertex(data);
        var idx = this.vertexSet.indexOf(v);
        if(idx == -1){
            this.vertexSet.add(v);
        }
        idx = this.vertexSet.indexOf(v);

        if(adjv != null){
            for(var i = 0; i < adjv.length; i++){
                var v2 = new Vertex(adjv[i])
                var j = this.vertexSet.indexOf(v2); 
                if(j == -1){
                    this.addVertex(adjv[i], [data]);
                }
                j = this.vertexSet.indexOf(v2); 
                idx = this.vertexSet.indexOf(v);
                this.vertexSet.list[idx].addAdj(this.vertexSet.list[j]);
            }
        }

    }

    // contains(data){
    //     if(this.vertexSet.length == 0){
    //         return -1; 
    //     }
    //     else{
            
    //         return this.binarySearchVertex(data,0,this.vertexSet.length-1);
    //     }
    // }

    binarySearchVertex(key, low, high){
        if(this.vertexSet != undefined || this.vertexSet != []){
            var middle = Math.floor((low+high)/2);
            if(high < low){
                return -1; 
            }
            if(key == this.vertexSet[middle].data){
                return middle; 
            }
            else if(key < this.vertexSet[middle].data){
                return this.binarySearchVertex(key,low,middle-1);
            }
            else{
                return this.binarySearchVertex(key,middle+1,high);
            }
        }
    }

    toString(){
        var result = ""; 
        for(var i = 0; i < this.vertexSet.list.length; i++){
            result += this.vertexSet.list[i].toString() + "\n";
        }
        return result; 
    }

    ajdMatrix(){
        var result = Array(this.vertexSet.list.length); 
        const ref = this.vertexSet.list;
        for(var i = 0; i < this.vertexSet.list.length; i++){
            var x = Array(this.vertexSet.list.length); 
            var vi = ref[i]; 
            for(var j = 0; j < this.vertexSet.list.length; j++){
                if(vi.contains(ref[j].data) != -1){
                    x[j] = 1;
                }
                else{
                    x[j] = 0; 
                }
            }
            result[i] = x; 
        }
        return result; 
    }

    print_ajdMatrix(matrix){
        var result = "";
        for(var i = 0; i < matrix.length; i++){
            result += ("|" + matrix[i].toString().replace(/,/g , " ") + "|\n"); 
        }
        return result; 
    }
}