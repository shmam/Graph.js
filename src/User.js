module.exports = class User{ 
    constructor(name){
        this.name = name; 
        this.uid = this.hashCode(); 
        this.coin = Math.random();
    }


    toString(){
        return("User [name=" + this.name + ", id=" + this.uid + ", coin=" + this.coin + "]");
    }

    // pulled this great hash function from http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
    hashCode(){
        var hash = 0;
        if (this.name.length == 0) return hash;
        for (var i = 0; i < this.name.length; i++) {
            var char = this.name.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    compareTo(o){
        if(o instanceof User){
            if(this.name === o.name){
                return 0;
            }
            else if(this.name < o.name){
                return -1; 
            }
            else{
                return 1; 
            }
        }else{
            return undefined;
        }
    }

}



