const SortedArrayList = require('../src/SortedArrayList'); 
const User = require('../src/User');

/**
 * TEST SUITES FOR THE SORTED ARRAY LIST CLASS
 * 
 */

test('Blank sorted array list ', () => {
    var x = new SortedArrayList();
    expect(x.size).toEqual(0);
    x.add(4); 
    expect(x.list).toEqual([4]);
    expect(x.size).toEqual(1);
    x.add(5); 
    expect(x.list).toEqual([4,5]);
    expect(x.size).toEqual(2);
    x.add(2); 
    expect(x.list).toEqual([2,4,5]);
    expect(x.size).toEqual(3);
    x.add(3); 
    expect(x.list).toEqual([2,3,4,5]);
    expect(x.size).toEqual(4);
    
});

test('Int list: adding to the front of the lst ', () => {
    var x = new SortedArrayList();
    x.add(4); 
    expect(x.list).toEqual([4]);
    expect(x.size).toEqual(1);
});

test('Int list: adding to the back of the list', () => {
    var x = new SortedArrayList();
    x.add(4); 
    x.add(5); 
    expect(x.list).toEqual([4,5]);
    expect(x.size).toEqual(2);
});

test('Int list: adding to the middle of the list', () => {
    var x = new SortedArrayList();
    x.add(4); 
    x.add(5); 
    x.add(2); 
    expect(x.list).toEqual([2,4,5]);
    expect(x.size).toEqual(3);
    x.add(3); 
    expect(x.list).toEqual([2,3,4,5]);
    expect(x.size).toEqual(4);
});


test('Object List (User)', () => {
    var x = new SortedArrayList(); 
    x.add(new User("Dale")); 
    x.add(new User("Ned")); 
    x.add(new User("Adam"));
    x.add(new User("Belton"));
    expect(x.list[0].name).toEqual("Adam");
    expect(x.list[1].name).toEqual("Belton");
    expect(x.list[2].name).toEqual("Dale");
    expect(x.list[3].name).toEqual("Ned");
});
