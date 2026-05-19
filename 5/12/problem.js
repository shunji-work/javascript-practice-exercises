/*
scores = [70, 85, 40, 90]
合計点を表示してください。
*/
const scores = [70, 85, 40, 90];
let sum = 0;
for (const m of scores) {
  sum += m;
}
console.log(sum);

/*
scores = [70, 85, 40, 90]
80点以上の点数だけ表示してください。
*/
const overs = scores.filter(function(score){
  return score >= 80;
})
console.log(overs);
/*
scores = [70, 85, 40, 90]
80点以上の人数を表示してください。
*/
let count = 0;
for (let i = 0; i < scores.length; i++){
  if (scores[i] >= 80) {
    count += 1;
  }
}
  console.log(count);

/*
users = [
  { name: "佐藤", age: 24 },
  { name: "田中", age: 18 },
  { name: "山田", age: 30 }
]
20歳以上の人の名前だけ表示してください。   
*/
let users = [
  { name: "佐藤", age: 24 },
  { name: "田中", age: 18 },
  { name: "山田", age: 30 }
]
for (let i = 0; i < users.length; i++){
  if (users[i].age >= 20){
    console.log(users[i].name)
  }
}

/*
studyLogs = [
  { title: "JavaScript", minutes: 30 },
  { title: "React", minutes: 60 },
  { title: "TypeScript", minutes: 45 }
]
合計学習時間を表示してください。
*/
let studyLogs = [
  { title: "JavaScript", minutes: 30 },
  { title: "React", minutes: 60 },
  { title: "TypeScript", minutes: 45 }
];
let studySum = 0;
for (let i = 0; i < studyLogs.length; i++){
  studySum = studySum + studyLogs[i].minutes
}
console.log(studySum);

/これを関数で書いてみよう/
function sumScore(){
  let total = 0;
  for(const score of scores){
    total += score;
  }
  return total;
}