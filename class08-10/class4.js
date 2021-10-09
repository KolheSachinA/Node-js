class A {

    test1(){
            //console.log(100);
            return 100;
    }
    test2(){
        //console.log(200);
        return 200;
    }
}
const a1 = new A();
console.log(a1);
console.log(a1.test1());
//console.log(a1.test2());
console.log("-----------------");

class B extends A{
    test3(){
            return 300;
    }
    test2(){
        return "200:B"
    }
}
const b1 = new B();
console.log(b1.test1())
console.log(b1.test3());
console.log(b1.test2());
console.log("----------------");

class C extends B{
    test4(){
        return 400;
    }
    test4(){
        return "400:1";
    }
}

const c1 = new C();
console.log(c1.test4());
console.log(c1.test2());