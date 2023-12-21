import "./App.css";
import { useState } from "react";

//มี state 1 อันชื่อ greeting massage
//มี event click

function App() {
  //สร้าง useState
  const [greetingMassage, setGreetingMassage] = useState("Greeting Message"); //ฟังชั่นนี้ return array คือ[state,fucntion ที่เอาไว้เปลี่ยน state (เพื่อ re-render)]

  return (
    <div className="App">
      <div className="greeting-container">{greetingMassage}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMassage("สวัสดี!"); //ใช้ callback fn. เพื่อre-render state โดยอ่้างถึง paramiter ใน state(1) หรือก็คือตัวที่ 2
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreetingMassage("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setGreetingMassage("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
