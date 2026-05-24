const users = [
  { name: "佐藤", age: 24 },
  { name: "田中", age: 18 },
  { name: "山田", age: 30 }
];

const studyLogs = [
  { title: "JavaScript", minutes: 30 },
  { title: "React", minutes: 60 },
  { title: "TypeScript", minutes: 45 }
];

const scores = [70, 85, 40, 90];

// 問題1：ユーザー名だけの配列を作る
const names = users.map(user => user.name);
console.log(names);

// 問題2：学習タイトルだけの配列を作る
const titles = studyLogs.map(log => log.title);
console.log(titles);

// 問題3：点数に10点加えた配列を作る
const tensu = scores.map(score => score + 10);
console.log(tensu);

/* 問題4：ユーザーの紹介文配列を作る
求める結果
[
  "佐藤さんは24歳です",
  "田中さんは18歳です",
  "山田さんは30歳です"
]
*/
const guidance = users.map(user => `${user.name}さんは${user.age}歳です`);
console.log(guidance);

/* 問題5：学習記録を表示用の文章に変換する
求める結果
[
  "JavaScriptを30分学習しました",
  "Reactを60分学習しました",
  "TypeScriptを45分学習しました"
]
*/
const kiroku = studyLogs.map(log => `${log.title}を${log.minutes}分学習しました`);
console.log(kiroku);

/* Day6 */

const studyLogs2 = [
  { title: "JavaScript", minutes: 30, category: "programming" },
  { title: "React", minutes: 60, category: "programming" },
  { title: "TypeScript", minutes: 45, category: "programming" },
  { title: "英語", minutes: 50, category: "language" },
  { title: "数学", minutes: 70, category: "study" }
];

/* 問題1：学習記録をすべて表示する
求める結果
JavaScriptを30分学習しました
Reactを60分学習しました
TypeScriptを45分学習しました
英語を50分学習しました
数学を70分学習しました
*/
studyLogs2.forEach(log => {
  console.log(`${log.title}を${log.minutes}分学習しました`);
});

/* 問題2：合計学習時間を表示する
求める結果
合計学習時間は255分です
*/
let gokei = 0;

for (let i = 0; i < studyLogs2.length; i++) {
  gokei = gokei + studyLogs2[i].minutes;
}

console.log(`合計学習時間は${gokei}分です`);

/* 問題3：60分以上の学習記録だけ表示する
求める結果
Reactを60分学習しました
数学を70分学習しました
*/
const ganbatta = studyLogs2.filter(log => log.minutes >= 60);

ganbatta.forEach(log => {
  console.log(`${log.title}を${log.minutes}分学習しました`);
});

/* 問題4：プログラミングカテゴリだけ表示する
求める結果
JavaScriptを30分学習しました
Reactを60分学習しました
TypeScriptを45分学習しました
*/
const programmingLogs = studyLogs2.filter(log => log.category === "programming");

programmingLogs.forEach(log => {
  console.log(`${log.title}を${log.minutes}分学習しました`);
});

/* 問題5：一番長く勉強した記録を表示する
求める結果
一番長く勉強したのは数学で、70分です
*/
let mostTime = 0;

for (let i = 0; i < studyLogs2.length; i++) {
  if (studyLogs2[i].minutes > mostTime) {
    mostTime = studyLogs2[i].minutes;
  }
}

const mostTimeObject = studyLogs2.find(log => log.minutes === mostTime);
console.log(`一番長く勉強したのは${mostTimeObject.title}で、${mostTimeObject.minutes}分です`);

/* 問題6：指定したタイトルの学習記録を探す
求める結果
Reactは60分学習しました
*/
const reactLog = studyLogs2.find(log => log.title === "React");
console.log(`${reactLog.title}は${reactLog.minutes}分学習しました`);

/* 問題7：カテゴリごとの合計時間を出す
求める結果
programming：135分
language：50分
study：70分
*/
const proCate = studyLogs2.filter(log => log.category === "programming");
let proMinutes = 0;

for (let i = 0; i < proCate.length; i++) {
  proMinutes = proMinutes + proCate[i].minutes;
}

const lanCate = studyLogs2.filter(log => log.category === "language");
let lanMinutes = 0;

for (let i = 0; i < lanCate.length; i++) {
  lanMinutes = lanMinutes + lanCate[i].minutes;
}

const stuCate = studyLogs2.filter(log => log.category === "study");
let stuMinutes = 0;

for (let i = 0; i < stuCate.length; i++) {
  stuMinutes = stuMinutes + stuCate[i].minutes;
}

console.log(`カテゴリごとの合計学習時間を表示する。
programming：${proMinutes}分
language：${lanMinutes}分
study：${stuMinutes}分`);
