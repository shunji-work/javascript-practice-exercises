// 5/20 JavaScript 練習用ファイル
/*特定の名前のユーザーを探す*/
const users = [
  { name: "佐藤", age: 24 },
  { name: "田中", age: 18 },
  { name: "山田", age: 30 }
];
const result = users.find(element => element.name === "山田");
console.log(result);
/*特定のタイトルの学習記録を探す title が "React"*/
const studyLogs = [
  { title: "JavaScript", minutes: 30, category: "programming" },
  { title: "React", minutes: 60, category: "programming" },
  { title: "英語", minutes: 45, category: "language" }
];

const results = studyLogs.filter(t => t.title === "React");

console.log(results);

//20歳以上だけ取り出す//
const olders = users.filter(user => user.age >= 20);
console.log(olders);

/60分以上の学習記録だけ取り出す/
const sixtys = studyLogs.filter(time => time.minutes >= 60);
console.log(sixtys);

//特定カテゴリだけ取り出す category が "programming"//
const pro = studyLogs.filter(log => log.category === "programming");
console.log (pro);