// 3の倍数なら「アホ」
// 3のつく数字なら「あほ」
let nabeatsu = "";
for (let i =1; i <= 100; i++) {
  if (i > 1) {
    nabeatsu += " ";
  };
  if (i % 3 === 0) {
    nabeatsu += "アホ";
  } else if (String(i).match("3")) {
    nabeatsu += "あほ";
  } else {
    nabeatsu += String(i);
  }
};
console.log(nabeatsu);
