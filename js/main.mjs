// import "./styles.css";
// import curDot from "cursor-dot";
import '../css/main.css';
import curDot from 'cursor-dot';
// import { createRequire } from 'cursor-dot'
// const require = createRequire(import.meta.url);
const $ = s => document.querySelector(s);

const cursor = curDot({
  easing: 4,
  diameter: 100,
  // background: '#aaa',
  borderColor: 'rgba(0,0,0,.7)',
  borderWidth: 2,
});

cursor.over($('El'), {
  scale: .5,
  background: '#fff'
})

cursor.over("figure", {
  background: "transparent",
  borderColor: 'rgba(255,255,255,.7)',
});

cursor.over(".react1", {
  borderColor: "rgba(255,255,255,.38)"
});

cursor.over(".react2", {
  scale: 0.5,
  background: "#fff"
});

cursor.over($(".react3"), {
  scale: 1.4,
  background: "#faa2c1",
  borderColor: "transparent"
});

// console.log(cursor.parentElement);

