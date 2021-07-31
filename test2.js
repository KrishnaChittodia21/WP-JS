// let newList =  [1,2,3].push(4);
// console.log(newList.push(5));

var eP = '12';
function foo() {
    eP = '13';
    return;
}
foo();
console.log(eP);

(function() {
    var objA = Object.create({
        foo: '1'
    })
    var objB = objA;
    objB.foo = '2';
    delete objA.foo;
    console.log(objA.foo);
    console.log(objB.foo);
}())

const a = {};
const b = {key: 'b'};
const c = {key: 'c'};

a[b] = 123;
a[c] = 456;
console.log(a[b]);

class CC{
    static colorC(newC) {
        this.newColor = this.newColor;
        return this.newColor;
    }

    constructor({ newColor= "green"} ={}){
        this.newColor = newColor;
    }
}

const  ff = new CC({newColor: 'purple'});
// console.log(ff.colorC('oraneeee'));

const sum = eval('10*10+5');
console.log(sum);

var greet = "hello world";
var toGreet = [].filter.call(greet, function(element, index){
    return index > 5;
})

console.log(toGreet);

var arr = new Array('a', 'b', 'c', 'd', 'e');
arr[10] = 'f';
delete arr[10];
console.log(arr.length);

function ex(cb){
    cb(null, 'ee');

}

ex(function(err, data){
    console.log(data);
})

console.log('ddddd');

var obj = {
    mm: 'jjj',
    oo: function(){
        (function(){
                console.log(this.mm)
            }())
    }
}

console.log(obj.oo());

var pp = (function(x){
    delete x;
    return x;
})(0);
console.log(pp)

const ke = ["c", "a"];
const v = ["ll", 22];
 