<template>
  <div class="hello">
 <h1>Things Todo</h1>
    <div>
        <div id="todoList">
            <ul>
                <li class="done">
                    <div class="checkBox done"></div>
                    <span>Learn Vue</span>
                    <i class="fa fa-trash-o"></i>
                </li>
                <li>
                    <div class="checkBox"></div>
                    <span>Buy toilet paper</span>
                    <i class="fa fa-trash-o"></i>
                </li>
                <li>
                    <div class="checkBox"></div>
                    <span>Do something awesome!</span>
                    <i class="fa fa-trash-o"></i>
                </li>
            </ul>
            <div id="newTask">
                <input type="text" placeholder="New task">
                <button><span>+</span></button>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
 
      #todoList {
          width: 300px;
          box-shadow: -2px 2px 2px -1px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          background: white;
          overflow: hidden;
      }
      #todoList ul {
          list-style: none;
          padding: 25px;
      }
      #todoList ul li {
          display: flex;
          align-items: center;
          line-height: 1;
          user-select: none;
      }
      #todoList ul li:not(:last-child) {
          padding-bottom: 15px;
      }
      #todoList ul li:hover {
          cursor: text;
      }
      #todoList ul li .checkBox {
          width: 20px;
          height: 20px;
          border: 2px solid #ddd4ce;
          border-radius: 50%;
          margin-right: 15px;
          position: relative;
          display: flex;
          opacity: 0.7;
      }
      #todoList ul li .checkBox:hover {
          cursor: pointer;
          opacity: 1;
      }
      #todoList ul li .checkBox, #todoList ul li .checkBox:before {
          transition: all 0.2s ease-in-out;
      }
      #todoList ul li .checkBox:before {
          content: "\f00c";
          font-family: "FontAwesome";
          margin: auto;
          font-size: 0.8em;
          color: #2ea44f;
          opacity: 0;
          transform: scale(0.5);
      }
      #todoList ul li .checkBox.done {
          border-color: #2ea44f;
          opacity: 1;
      }
      #todoList ul li .checkBox.done:before {
          opacity: 1;
          transform: scale(1);
      }
      #todoList ul li i {
          margin-left: auto;
          padding-left: 15px;
          opacity: 0;
          color: #ff3c41;
          transition: all 0.2s ease-in-out;
          font-size: 1.2em;
      }
      #todoList ul li:hover i {
          opacity: 1;
          cursor: pointer;
      }
      #todoList ul li span {
          position: relative;
      }
      #todoList ul li span, #todoList ul li span:before {
          transition: all 0.2s ease-in-out;
      }
      #todoList ul li span:before {
          content: '';
          height: 1px;
          background: #c3bbb6;
          width: 0%;
          top: 50%;
          position: absolute;
          left: 0;
      }
      #todoList ul li.done span {
          color: #c3bbb6;
      }
      #todoList ul li.done span:before {
          width: 100%;
      }
      #todoList #newTask {
          background: rgba(0, 0, 0, 0.05);
          padding: 15px;
          display: flex;
      }
      #todoList #newTask input {
          flex: 1;
          margin-right: 10px;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          outline: none;
          border-left: 2px solid #2ea44f;
          font-family: 'Roboto', sans-serif;
      }
      #todoList #newTask button {
          outline: none;
          border: none;
          border-radius: 50%;
          font-size: 1.5em;
          color: white;
          background: #2ea44f;
          display: flex;
          width: 35px;
          height: 35px;
          transition: all 0.15s ease-in-out;
      }
      #todoList #newTask button span {
          margin: auto;
      }
      #todoList #newTask button:hover {
          cursor: pointer;
          background: #047a39;
      }
      
      ::placeholder {
          color: rgba(0, 0, 0, 0.3);
      }

</style>


