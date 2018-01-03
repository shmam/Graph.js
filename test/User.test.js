const User = require('../src/User');


test('creates new user with expected hash id', () => {
    var x = new User("Sam"); 
    expect(x).not.toBe(undefined);
    expect(x.uid).toBe(82879); 
});

test('ensures that two differnt objects have differnt hashes', () => {
    var x = new User("Sam"); 
    var y = new User("Ben"); 
    expect(x.uid).not.toBe(y.uid); 
    expect(x.uid).toBeGreaterThan(y.uid);
});

test('testing the compareto method in user', ()=> {
    var x = new User("Sam"); 
    var y = new User("Ben"); 

    expect(x.compareTo(y)).toEqual(1);
    expect(y.compareTo(y)).toEqual(0);
    expect(y.compareTo(x)).toEqual(-1);
});