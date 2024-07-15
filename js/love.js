function 고백(애정표현) {
  console.log("서혜정" + 애정표현);
}

고백("사랑해");
고백("보고싶어");
고백("너무이뻐!");

const x = 2;

if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else {
  console.log("etc");
}
let i = 5;
while (i > 0) {
  console.log("i=", i);
  i = i - 1;
}
i = 5;
while (i-- > 0) console.log("🚀 ~ i:", i);

i = 5;
do {
  console.log("🚀  i:", i);
} while (i-- > 1);

i = 0;
let sum = 0;
while (i < 100) {
  i = i + 1;
  sum = sum + i;
}
console.log("🚀  sum:", sum);

// 배열 for
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr?.length; i++) {
  console.log(`arr[${i}]:`, arr[i]);
}
//for of문
for (const t of arr) {
  console.log("🚀 ~ t:", t);
}

//for of문 풀이

//for in문
const user = { id: 1, name: "Hong" };
for (const p in user) {
  console.log("🚀 ~ p:", p);
}
// if (t>2) break; t가 2보다 크면 멈춰라
const user = { id: 1, name: "Hong" };
for (const p in user) {
  console.log("🚀 ~ p:", p, user[p]);
}

const WEEK_NAMES = "일월화수목금토";
for (const w of WEEK_NAMES) {
  console.log("🚀 ~ w:", w);
}
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
