const firstrecurring = require("./firstreccuring");


test('test1 ', () => {
    expect(firstrecurring([2,5,1,2,3,5,1,2,4])).toBe(2)
});
test('test2 ', () => {
    expect(firstrecurring([2,1,1,2,3,5,1,2,4])).toBe(1)
});
test('test3 ', () => {
    expect(firstrecurring([2,3,4,5])).toBe(undefined)
});
test('test4 ', () => {
    expect(firstrecurring([2,5,5,2,3,5,1,2,4])).toBe(5)
});


