"use strict";

	Vue.directive("auto-focus", {
		bind: function () {
			Vue.nextTick(function () {
				this.el.focus();
			}.bind(this));
		}
	});

	new Vue({
		
		el: "#todoList",
		data: {
			newTask: "",
			tasks: [
				{
					text: "Learn Vue",
					checked: true
        },
        {
					text: "Buy toilet paper",
					checked: false
        },
        {
					text: "Do something awesome",
					checked: false
				}
			]

		},
		
		methods: {

			addTask: function () {
				var task = this.newTask.trim();
				if (task) {
					this.tasks.push({text: task, checked: false});
					this.newTask = "";
				}
			},

			removeTask: function (task) {
        var index = this.tasks.indexOf(task);
				this.tasks.splice(index, 1);
			},

			check: function (task) {
				task.checked = true;
			},

			isChecked: function (task) {
				return task.checked;
			}

		}
	});