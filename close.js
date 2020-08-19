function add() {
    let a = 1;
    const addOne = function(b) { return b + a; }
    ++a;
    return addOne;
}
const addOne = add()
addOne()