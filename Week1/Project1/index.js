var rect = {
    peremiter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

console.log(rect.peremiter(5, 8));
console.log(rect.area(5, 8));