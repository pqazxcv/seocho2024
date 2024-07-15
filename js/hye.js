// 배열 for
const arr = [10, 20, 30, 40, 50];
for(let)
//for of문
for (const t of arr) {
  console.log("🚀 ~ t:", t);
}
//for of문 풀이

//for in문
const user = { id: 1, name: "Hong" };
for (const p in user) console.log("🚀 ~ p:", p);

// break continue

//return
const 국어 = 70;
const 수학 = 70;
if (국어 > 70) {
  console.log("합격");
} else if (수학 < 70) {
  console.log("통과");
} else {
  console.log("불합격");
}

// 줄여서 60점

function checkScore60() {
  if (국어 > 70) {
    return "합격";
  } else if (수학 > 70) {
    return "통과";
  } else {
    return "불합격";
  }
}

console.log(checkScore60());

// 100점짜리 코드
function checkScore100() {
  if (국어 > 70) {
    return "합격";
  }

  if (수학 > 70) {
    return "통과";
  }

  return "불합격";
}

console.log(checkScore100());

console.log("================");

const dt = new Date();
console.log("🚀 ~ dt:", dt, dt.getDay());

