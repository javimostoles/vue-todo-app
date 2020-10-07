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



