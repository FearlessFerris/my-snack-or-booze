const square = [
    [ 1, 2, 3, 4, 5 ],
    [ 6, 7, 8, 9, 10 ],
    [ 11, 12, 13, 14, 15 ],
    [ 16, 17, 18, 19, 20 ],
    [ 21, 22, 23, 24, 25 ]
  ]
  
  function unroll(squareArray) {
      const numRows = squareArray.length;
      const numCols = squareArray[0].length;
      let result = [];
      
      let top = 0,
          bottom = numRows - 1,
          left = 0,
          right = numCols - 1;
      let direction = 0;
  
      while (top <= bottom && left <= right) {
          if (direction === 0) {
              for (let i = left; i <= right; i++) {
                  result.push(squareArray[top][i]);
              }
              top++;
          } else if (direction === 1) {
              for (let i = top; i <= bottom; i++) {
                  result.push(squareArray[i][right]);
              }
              right--;
          } else if (direction === 2) {
              for (let i = right; i >= left; i--) {
                  result.push(squareArray[bottom][i]);
              }
              bottom--;
          } else if (direction === 3) {
              for (let i = bottom; i >= top; i--) {
                  result.push(squareArray[i][left]);
              }
              left++;
          }
          direction = (direction + 1) % 4;
      }
      
      return result;
    }
    
    module.exports = unroll;
    

  