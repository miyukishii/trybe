// const sum = (array, int) => {
//   let numbers = [];
//   for (let i = 0; i < array.length; i ++) {
//     let verify = int - array[i];

//     if(numbers[verify] !== undefined) {
//         return numbers.push(verify);
//     }
//   }
//   return numbers;
// }

// const findTwoNumbersThatSum = (array, int) => {
//     let numbers = [];
//     for (let i = 0; i < array.length; i ++) {
//       let verify = int - array[i];
  
//       if(verify !== array[i] && array.includes(verify)) {
//           return [verify, array[i]];
//       }
//       numbers[array[i]] = true;
//     }
//     return [];
//   }

// console.log(findTwoNumbersThatSum( [3,5,-4,8,11,1,-1,6], 10));

// const isPossibleToTakePicture = (blackUniform, orangeUniform) => {
 
//   let blackUniformVerificationFailed = false;

//   blackUniform.sort((a,b) => a - b);
//   orangeUniform.sort((a, b) => a - b);

//   for (let i = 0; i < blackUniform.length; i ++) {
//     if (blackUniform[i] >= orangeUniform[i]) {
//       blackUniformVerificationFailed = true;
//       break;
//     }
//   }

//   if (blackUniformVerificationFailed) {
//     for (let i = 0; i < orangeUniform.length; i ++) {
//       if (orangeUniform[i] >= blackUniform[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// const blackUniform = [150, 181, 149, 152, 154];
// const orangeUniform = [162, 181, 151, 160, 170];
// console.log(isPossibleToTakePicture(blackUniform, orangeUniform));

// function isPossiblePhotograph(blackuniformHeights, orangeuniformHeights) {
//     blackuniformHeights.sort((a, b) => a - b);
//     orangeuniformHeights.sort((a, b) => a - b);
//     for (let i = 0; i < blackuniformHeights.length; i++) {
//       if (blackuniformHeights[i] <= orangeuniformHeights[i]) {
//        break;
//       }
//       return true;
//     }
//     for (let i = 0; i < orangeuniformHeights.length; i++) {
//       if (orangeuniformHeights[i] <= blackuniformHeights[i]) {
//         return false;
//      }
//     return true;
//   }
// }

// let blackuniformHeights = [150, 179, 149, 152, 154];
// let orangeuniformHeights = [162, 181, 151, 160, 170];
// console.log(isPossiblePhotograph(blackuniformHeights, orangeuniformHeights));


// const codifyString = (string) => {
//     let compressedString = "";
//     let i = 0;
//     while (i < string.length) {
//       let count = i + 1;
//       while (count < string.length && string[count] === string[i]) {
//         count++;
//       }
//       let n = count - i;
//       if (n >= 10) {
//         compressedString += (n - (n % 9)) + string[i] + (n % 9) + string[i];
//       } else {
//         compressedString += n + string[i];
//       }
//       i = count;
//     }
//     return compressedString;
// }

// console.log(codifyString('BBBBBBBBBBBBBAACCCDD'));

// console.log(Math.floor(14 % 10));

const codifyString = (string) => {
    let compressedString = "";
    let i = 0;
    while (i < string.length) {
      let count = i + 1;
      while (count < string.length && string[count] === string[i]) {
        count++;
      }
      let n = count - i;
      let q = Math.floor(n/9);
      let r = n%9;
      while(q > 0){
        compressedString += (9+string[i]);
        q -= 1;
      }
      compressedString += (r+string[i]);
      i = count;
      q = 0; r = 0;
    }
    return compressedString;
}

console.log(codifyString('BBBBBBBBBBBBBBBBBBBBAABBBBBCCCDD'));
