
module.exports = class Vertex{
    constructor(data){
        this.data = data;
        this.adjv = []; 
    }

    addAdj(v){
        if(this.contains(v.data) == -1){
            this.adjv.push(v); 
            v.addAdj(this);
        }
    }

    contains(data){
        if(this.adjv.length == 0){
            return -1; 
        }
        else{
            for(var i = 0; i < this.adjv.length; i++){
                if(this.adjv[i].data == data){
                    return i;
                }
            }
            return -1; 
        }
    }

    toString(){
        var result = this.data.toString() + ": ["; 
        for(var i = 0; i < this.adjv.length; i++){
            result += (this.adjv[i].data .toString() + ","); 
        }
        return (result + "]");
    }

    compareTo(o){
        if(typeof this.data === 'object' || typeof o.data === 'object'){
            return this.data.compareTo(o.data); 
        }
        else if((typeof this.data === 'number' || typeof this.data === 'string') &&  (typeof o.data === 'number' || typeof o.data === 'string')) {
            if(this.data === o.data){
                return 0; 
            }
            else if(this.data < o.data){
                return -1; 
            }
            else{
                return 1;
            }
        }
    }

}


