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

//問題1：ユーザー名だけの配列を作る//
const names = users.map(n => n.name);
console.log(names);

//問題2：学習タイトルだけの配列を作る//
const titles = studyLogs.map(t => t.title);
console.log(titles);

//問題3：点数に10点加えた配列を作る//
const tensu = scores.map(ten => ten + 10);
console.log(tensu);

/*問題4：ユーザーの紹介文配列を作る
求める結果
各ユーザーを紹介文に変換した配列を作る。
[
  "佐藤さんは24歳です",
  "田中さんは18歳です",
  "山田さんは30歳です"
]*/
const guidance = users.map(n => {return `${n.name}さんは${n.age}歳です`});
console.log(guidance);

/*問題5：学習記録を表示用の文章に変換する
 "JavaScriptを30分学習しました",
  "Reactを60分学習しました",
  "TypeScriptを45分学習しました"
  */
 const kiroku = studyLogs.map(k => `${k.title}を${k.minutes}分学習しました`);
 console.log(kiroku); 

 /*Day6*/

 const studyLogs2 = [
  { title: "JavaScript", minutes: 30, category: "programming" },
  { title: "React", minutes: 60, category: "programming" },
  { title: "TypeScript", minutes: 45, category: "programming" },
  { title: "英語", minutes: 50, category: "language" },
  { title: "数学", minutes: 70, category: "study" }
];
/*問題1：学習記録をすべて表示する
JavaScriptを30分学習しました
Reactを60分学習しました
TypeScriptを45分学習しました
英語を50分学習しました
数学を70分学習しました*/
const Gkiroku = studyLogs2.map(guide => `${guide.title}を${guide.minutes}分学習しました`);
console.log(Gkiroku);

/*問題2：合計学習時間を表示する
前提条件
studyLogs 配列がある。
各学習記録には minutes がある。
求める結果
すべての学習時間を合計して表示する。
合計学習時間は255分です*/
let gokei = 0;
for(let i = 0;i < studyLogs2.length; i++){
gokei = gokei +studyLogs2[i].minutes
};
console.log(`合計学習時間は${gokei}分です`);

/*問題3：60分以上の学習記録だけ表示する
前提条件
studyLogs 配列がある。
各学習記録には minutes がある。
求める結果
学習時間が60分以上の記録だけを表示する。
Reactを60分学習しました
数学を70分学習しました*/
const ganbatta = studyLogs2.filter(x => x.minutes >= 60);
ganbatta.forEach(y => {console.log(`${y.title}を${y.minutes}分学習しました`)});

/*問題4：プログラミングカテゴリだけ表示する
前提条件
studyLogs 配列がある。
各学習記録には category がある。
category が "programming" のものを対象にする。
求める結果
プログラミングカテゴリの学習記録だけを表示する。
JavaScriptを30分学習しました
Reactを60分学習しました
TypeScriptを45分学習しました*/
const prog = studyLogs2.filter(z => z.category === "programming");
prog.forEach(p => {console.log(`${p.title}を${p.minutes}分学習しました`)});

/*問題5：一番長く勉強した記録を表示する
最も minutes が大きい記録を探す。
求める結果
一番長く勉強した記録を表示する。
一番長く勉強したのは数学で、70分です*/
let mostTime = 0;
for (let i=0; i < studyLogs2.length; i++){
  if (studyLogs2[i].minutes > mostTime)
 {mostTime = studyLogs2[i].minutes;} 
}
const mostTimeObject = studyLogs2.find(m => m.minutes === mostTime);

console.log(`一番長く勉強したのは${mostTimeObject.title}で${mostTimeObject.minutes}分です`);

/*問題6：指定したタイトルの学習記録を探す
前提条件
studyLogs 配列がある。
各学習記録には title がある。
"React" というタイトルの記録を探す。
求める結果
Reactの学習記録を表示する。
Reactは60分学習しました*/

/*問題7：カテゴリごとの合計時間を出す
前提条件
studyLogs 配列がある。
各学習記録には category と minutes がある。
カテゴリごとに学習時間を合計する。
求める結果
カテゴリごとの合計学習時間を表示する。
programming：135分
language：50分
study：70分*/