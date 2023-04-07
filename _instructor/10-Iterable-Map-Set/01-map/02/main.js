// จงสร้าง Map จาก arr โดยให้ key ชื่อ email มี value เท่ากับ
// codeisfun@example.com และ key ชื่อ isActive มี value เท่ากับ true

const arr = [
  ["email", "codeisfun@example.com"],
  ["isActive", true]
];

const map = new Map(arr);
// console.log(map);
// console.log(map.get("email"));
// console.log(map.get("isActive"));

for (let el of map.entries()) {
  console.log(el);
}

for (let el of map) {
  console.log(el);
}

for (let el of map.keys()) {
  console.log(el);
}

Array.from(map.values()).map(el => console.log(el));
