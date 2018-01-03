module.exports = class SortedArrayList{
    constructor(){
        this.size = 0; 
        this.list = []; 
    }

    /**
     * Returns the number of elements in the list
     */
    size(){
        return this.size; 
    }

    /**
     * Returns a boolean value representing if the size of the arraylist is zero
     */
    isEmpty(){
        return (this.size === 0); 
    }

    /**
     * Takes in data and returns the index of its position in the list if it is in the list. If not, 
     * return -1. Work is delegated to recirsive binary search function
     * @param {*} data key 
     */
    indexOf(data){

        if(this.list.length == 0){
            return -1
        }
        else{
            return this.binarySearchIndex(data,0,this.list.length-1);
        }
        
    }

    /**
     * Binary search recurring algorthm that is used to search an array for a given key,
     * assuming that that key exists in the array
     * @param {*} key 
     * @param {*} low 
     * @param {*} high 
     */
    binarySearchIndex(key, low, high){
        if(typeof key == 'number' || typeof key == 'string'){
            if(this.list != undefined || this.list != []){
                var middle = Math.floor((low+high)/2);
                if(high < low){
                    return -1; 
                }
                if(key === this.list[middle]){
                    return middle; 
                }
                else if(key < this.list[middle]){
                    return this.binarySearchIndex(key,low,middle-1);
                }
                else{
                    return this.binarySearchIndex(key,middle+1,high);
                }
            }
        }
        else if((typeof key === 'object') && (typeof key.data  == 'number' || typeof key.data == 'string')){
            if(this.list != undefined || this.list != []){
                var middle = Math.floor((low+high)/2);
                if(high < low){
                    return -1; 
                }
                if(key.data === this.list[middle].data){
                    return middle; 
                }
                else if(key.data < this.list[middle].data){
                    return this.binarySearchIndex(key,low,middle-1);
                }
                else{
                    return this.binarySearchIndex(key,middle+1,high);
                }
            }
        }
        else if(typeof key.data === 'object'){
            if(this.list != undefined || this.list != []){
                var middle = Math.floor((low+high)/2);
                if(high < low){
                    return -1; 
                }
                if(key.compareTo(this.list[middle]) == 0){
                    return middle; 
                }
                else if(key.compareTo(this.list[middle]) < 0){
                    return this.binarySearchIndex(key,low,middle-1);
                }
                else{
                    return this.binarySearchIndex(key,middle+1,high);
                }
            }
        }
        
    }
    
    /**
     * Adds an item to the array at the specific index that is
     * determined by a sorting methid
     * @param {*} e item to add
     */
    add(e){

        if(this.isEmpty()){
            this.list.push(e); 
            this.size++; 
            return true; 
        }

        if(typeof e === 'object'){
            if(this.list[0].compareTo(e) > 0){
                this.list.splice(0,0,e); 
                this.size++; 
                return true; 
            }
            else if(this.list[this.size-1].compareTo(e) < 0){
                this.list[this.size] = e; 
                this.size++; 
                return true; 
            }
            else{
                var low = 0; 
                var high = this.list.length-1; 
                var mid = Math.floor((low+high)/2);
                while(low < high){
                    mid = Math.floor((low+high)/2);

                    if(this.list[mid].compareTo(e) > 0){
                        high = mid; 

                    }else{
                        low = mid + 1;
                    }
                }
                this.list.splice(low,0,e);
                this.size++;
                return true; 
            }
        }
        else if(typeof e === 'number' || typeof e === 'string'){
            if(this.list[0] > e){
                this.list.splice(0,0,e); 
                this.size++; 
                return true; 
            }
            else if(this.list[this.size-1] < e){
                this.list[this.list.length] = e; 
                this.size++; 
                return true; 
            }
            else{
                var low = 0; 
                var high = this.list.length-1; 
                var mid = Math.floor((low+high)/2);
                while(low < high){
                    mid = Math.floor((low+high)/2);

                    if(e < this.list[mid]){
                        high = mid; 

                    }else{
                        low = mid + 1;
                    }
                }
                this.list.splice(low,0,e);
                this.size++;
                return true; 
            }
        }
        else {
            console.log("What the heck is this object " + e + " and why is it " + (typeof e)); 
            return false; 
        }
    }
}