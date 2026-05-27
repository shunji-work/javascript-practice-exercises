// 5/25 JavaScript practice C問題初挑戦
/*X 円の商品を購入しようとしています。あなたは、手持ちの小銭で X 円ちょうどを支払おうとしています。

ここで言う小銭とは、500円硬貨、100円硬貨、50円硬貨、10円硬貨、5円硬貨、1円硬貨、のことを指し、すべての硬貨が十分な枚数あります。

支払いで使う小銭の合計枚数を最も少なくしたとき、何枚の硬貨が必要になるかを出力してください。

入力例 1 の場合、733 円の商品に対して、500円硬貨 1 枚、100円硬貨 2 枚、10円硬貨 3 枚、1 円硬貨 3 枚で支払うことができます。これが最少の小銭の合計枚数なので、9 と出力してください。*/
/ヒントありで正解/
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
 let X = Number(lines[0]);
 let count = 0;
 const coins = [500, 100, 50, 10, 5, 1];
 
 for(let i = 0; i < coins.length; i++){
     count = count + Math.floor(X / coins[i]);
     X = X % coins[i];
 }
  console.log(count);
  
});

/*5/26 C144
アリスさんはじゃんけんが大好きで、過去に何度も友達のボブさんとじゃんけんを行いました。
手元には、アリスさんとボブさんとの間で、過去に行われたじゃんけんの結果を全て記録したノートがあります。

ノートの記録を元に、過去にアリスさんはボブさんに何回勝ったかを出力するプログラムを作成してください。

例えば入力例 1 の場合、過去にじゃんけんは 6 回行われ、そのうちアリスさんは 3 回勝ち、 1 回あいこ、 2 回負けているので、プログラムでは 3 と一行に出力します。
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let winN = 0;
  const attempts = Number(lines[0]);
  const results = lines.slice(1).map(line => line.split(" "));
  
  for(let i = 0; i < attempts; i++){
      let alice = results[i][0];
      let bob = results[i][1];
      if((alice === "C" && bob === "P") ||
      (alice === "G" && bob === "C") ||
      (alice === "P" && bob === "G") ){
          winN = winN + 1;
      }
  }
  console.log(winN);
  
});
