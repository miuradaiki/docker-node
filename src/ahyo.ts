// import宣言するときは.jsにする
import { name, age } from "./uhyo.js"
import { getUhyoName } from "./uhyo.js"

console.log(name, age);
console.log(`uhyoの名前は${getUhyoName()}です`);

