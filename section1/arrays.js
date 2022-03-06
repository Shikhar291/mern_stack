// const movies=['aa','ab','ac','ad','ae','af','ag','ah'];

// console.log(movies);

// console.log(movies[2]);
// console.log(movies[0]);
// console.log(movies.length);

// console.log(movies.slice(2,movies.length-2));

// movies.push('abcd');
// console.log(movies);

// movies.splice(0,2);

// console.log(movies);

const nums=[1,2,3,4,5,6,7,8,9]
const nms=nums.map((n)=>{return n*2});
console.log(nms);

let nums2=nums.filter((n)=>{return n%2==0})
console.log(nums2);