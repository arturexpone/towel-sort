module.exports = function towelSort (matrix) {
    let result = [];
    if(!matrix) return result;
    matrix.map((item, index) => {
        if(index % 2 !== 0) {
            item.reverse();
        }
        result = [...result, ...item]
        return result;
    })
    return result;
}
