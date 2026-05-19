// 80点以上なら合格
let score = 85;

function gokaku(score) {
  if (score >= 80) {
    return "合格";
  } else {
    return "不合格";
  }
}

console.log(gokaku(score));
//年齢が20歳以上なら成人
const age = 24;
function agefunc(a){
  if (a >= 20){
    return "成人";
  } else {
    return "不合格";
  }
}
console.log(agefunc(age));