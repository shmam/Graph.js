# Graph.js 
A lightweight javascript library for constructing undirected multigraphs of native __or__ custom objects. 


## Graph Class
### Graph()
Creates a new _Graph_ with an empty vertex set

#### Example
```javascript
var g = new Graph(); 
console.log(g.vertexSet); \\ => []
```


### Graph.addVertex(Object o, [Object o1, ... ])
paramaters | return values
---------- | -------------
_Object_ o (vertex) | none 
_Object[]_ (__nullable__)(array of objects to make adjacent to o) | ... 


#### Examples 
```javascript

```


### Graph.toString() 
### Graph.adjMatrix()
### Graph.print_ajdMatrix(adjMatrix[][]); 


## Vertex Class 
### Vertex(Object data)
Creates a new vertex object and stores the paramter __data__ in the field ```this.data```, and creates an empty array of adjacent verticies. 

#### Example
``` javascript
// anything can be a vertex!!!
var v1 = new Vertex(17); 
var v2 = new Vertex("Wow");
var v3 = new Vertex(new Date());
```

### Vertex.addAdj(Vertex v); 
paramaters | return values
---------- | -------------
_Vertex_ v | none 

Takes the parameter vertex __v__ and adds it to the list of adjacent vertices if there is not already an adjacent vertex with the same value as paramter __v__. _Used mostly by other methods and not intended to be used manually by user._


### Vertex.contains(Object data); 
paramaters | return values
---------- | -------------
_Object_ Data | -1 : if not found 
...| n : index of object in list

Takes in data and determines if this vertex currently has an adjacent vertex with this data as it's field. Returns the index of this adjacent vertex or -1 if there is not one.

### Vertex.toString(); 
paramaters | return values
---------- | -------------
none | String containing the vertex information

When called, the method returns a String containing this vertex's information followed by the list of the vertex's adjacent vertices. 

#### Example
``` javascript
var v = new Vertex("Example"); 
console.log(v.toString()); \\ => Example: []
v.addAdj(new Vertex("Code"))
v.addAdj(new Vertex("is cool"))
console.log(v.toString()); \\ => Example: [code, is cool]
```

### Vertex.compareTo(Vertex o)
paramaters | return values
---------- | -------------
_Vertex_ o | -1 : ```this``` is less than ```o```
...|  0 : ```this``` is equal to ```o```
...|  1 : ```this``` is greater than ```o```

Used to compare verticies since ```Graph``` stores it's vertex set in a ```SortedArrayList```. If the vertex data field (```this.data```) is type _Number_ or _String_ then standard comparative operators are used to determine return value. If the vertex data field is type _Object_ then the method will call and return the value of ```his.data.compareTo(o.data)```. 


## SortedArrayList Class
### SortedArrayList()
Creates a new SortedArrayList with size zero and no items in the list. 


### SortedArrayList.indexOf(Object data)
paramaters | return values
---------- | -------------
_Object_ Data | -1 : if not found 
...| n : index of object in list

indexOf takes in the value of the object to search for in the array, and returns its index in the list if it is present. This method uses a recursive binary search to quicly search the array in _O(log(n))_ time. 

#### Example
``` javascript
\\ if v is a SortedArrayList with the values [2,3,4]; 
v.indexOf(3) \\ => 1
v.indexOf(2) \\ => 0
v.indexOf(4) \\ => 2
```

### SortedArrayList.add(Object data)

paramaters | return values
---------- | -------------
_Object_ Data | true : added to list 
...|false : unable to add to the list

Adds the parameter to the list in the correct sorted order. If __data__ is a _Number_ or _String_, then regular comparative operators are used to insert in the sorted order. If  __data__ is an _Object_ then the method calls ```this.list[i].compareTo(data)``` to determine what the sorting order of the object is. This means you have to implement a ```compareTo(o)``` in the objects that use this library in order to sort the list. Here is an examle of a class ```User.js``` that implemented this method.

#### Example of compareTo(o) from User.js
```javascript

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
```

#### Example of SortedArrayList.add(...)
```javascript
var s = new SortedArrayList(); 

s.add("World"); 
s.add("Hello"); 

// s = ["Hello", "World"]; 
```