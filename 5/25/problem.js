/* 5/25 paizaD031
ある正の整数 n が入力されます。

n 分から秒へ変換するプログラムを作成して下さい。

例えば以下の様な入力の場合

16
60 を掛け算し
960
と出力して下さい。
*/
let n = 16;
function ex(n){
  return n * 60;
}
console.log(ex(n));
/*整数 N と M が与えられるので N を M で割った余りを出力して下さい。
割り切れて余りが 0 の場合も 0 と出力して下さい。 */
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
  const N = Number(lines[0]);
  const M = Number(lines[1]);
  
  function aa(n,m){
      return n % m;
  }
  console.log(aa(N,M));
});

/*あなたは給与の計算プログラムを作成しています。
時給 N と働いた時間 M が改行区切りで与えられるので給与を出力してください。

入力例 1 の場合

1120
6
と入力されるので
6720
と出力してください。*/
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
  const N = Number(lines[0]);
  const M = Number(lines[1]);
  const salaly = N * M;
  
  console.log(salaly);
});

/*あなたは鉛筆を箱買いしました。それぞれの箱には 1 ダースの鉛筆が入っています。

合計で何ダースの鉛筆を買ったかが入力されるので、買った鉛筆の本数を出力してください。

1 ダースは 12 本です。*/
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
  const N = Number(lines[0]);
  const P = N * 12;
  console.log(P);
});
/*あなたは食事のカロリーの計算をしています。
主食のお米のカロリーを計算することにしました。

1 合あたり 540 kcalとして1日に食べるお米の量 n 合が与えられるので何 kcal摂取するのかを出力してください。

入力例 1 の場合

2
と入力されるので
1080
と出力してください。*/
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
  const n = Number(lines[0]);
  const cal = n * 540;
  console.log(cal);
});
