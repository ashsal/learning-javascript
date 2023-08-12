class Counter {
    constructor() {
        this.counter = 0;
    }

    increment() {
        this.counter++;
        console.log("Simple counter is", this.counter);
    }
}

const counterInstance1 = new Counter();
counterInstance1.increment();
counterInstance1.increment();

const counterInstance2 = new Counter();
counterInstance2.increment();
counterInstance2.increment();


class CounterWithStatic {
    static counter = 0;

    increment() {
        CounterWithStatic.counter++;
        console.log("Counter with static is", CounterWithStatic.counter)
    }
}

const counterWithStaticInstance1 = new CounterWithStatic();
counterWithStaticInstance1.increment();
counterWithStaticInstance1.increment();

const counterWithStaticInstance2 = new CounterWithStatic();
counterWithStaticInstance2.increment();
counterWithStaticInstance2.increment();

class MyMath {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

const addResult = MyMath.add(1, 2);
console.log("addResult", addResult);