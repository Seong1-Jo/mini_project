import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
            <h1>시술예약</h1>
            
      <div className="firstInputContainer">
                <span>이름 : </span> <input type="text" /> <br />
                <span>아이디 : </span> <input type="text" />
              
      </div>
            
      <div className="secondInputContainer">
        시술         
        <ul>
                    
          <li>
                        
            <input type="checkbox" />
                        <span>왁싱</span>
                      
          </li>
                    
          <li>
                        
            <input type="checkbox" />
                        <span>네일</span>
                      
          </li>
                    
          <li>
                        
            <input type="checkbox" />
                        <span>피부관리</span>
                      
          </li>
                    
          <li>
                        
            <input type="checkbox" />
                        <span>기타</span>
                      
          </li>
                  
        </ul>
              
      </div>
            
      <div>
                <span>개인정보 제공동의</span>
                
        <input type="checkbox" />
                <button>제출</button>
              
      </div>
    </div>
  );
}

export default App;
