// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     let numb = Math.random();
// //     numb = 0.3;

// //     if (numb > 0.5) {
// //       resolve(numb);
// //     } else {
// //       reject("hahahah");
// //     }
// //   }, 1000);
// // });

// // const a = promise.then();
// // console.log(promise === a);
// // a.catch((result) => console.log(`resolved with ${result}`));

// const step1 = (init, callback) => {
//   callback(init + 1);
// };

// const step2 = (init, callback) => {
//   callback(init + 2);
// };

// const step3 = (init, callback) => {
//   callback(init + 3);
// };

// const operation = () => {
//   step1(0, (result) =>
//     step2(result, (result2) =>
//       step3(result2, (result3) => console.log(result3))
//     )
//   );
// };

// const step1_imp = (init) => {
//   return new Promise((resolve) => resolve(init + 1));
// };

// const step2_imp = (init) => {
//   return new Promise((resolve) => resolve(init + 2));
// };

// const step3_imp = (init) => {
//   return new Promise((resolve) => resolve(init + 3));
// };

// step1_imp(1)
//   .then((result) => step2_imp(result))
//   .then((result) => step3_imp(result))
//   .then((result) => console.log(result));

// const step1_test = (init) => {
//   return init + 1;
// };

// const step2_test = (init) => {
//   setTimeout(() => {}, 1000);
//   return init + 2;
// };

// const step3_test = (init) => {
//   return init + 3;
// };

// console.log(step3_test(step2_test(step1_test(6))));


async function test() {
  console.log("first");
  
  console.log("second");
}

test();
