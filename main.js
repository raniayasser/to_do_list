class taskManager {
  constructor() {
    this.input = document.querySelector("input");
    this.btn = document.querySelector(".addTask > button");
    this.notComplete = document.querySelector(".notComplete");
    this.complete = document.querySelector(".Complete");

    this.btn.addEventListener("click", this.addList.bind(this));
  }
  addList() {
    const task = this.input.value;

    if (task !== "") {
      const newLi = this.createTaskItem(task);
      this.input.value = "";
      this.notComplete.appendChild(newLi);
    }
  }

  createTaskItem(task) {
    const newLi = document.createElement("li");
    const checkBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    newLi.textContent = task;

    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
    checkBtn.addEventListener("click", () =>
      this.markComplete(newLi, checkBtn)
    );
    delBtn.addEventListener("click", () => this.deleteTask(newLi));
    return newLi;
  }

  markComplete(taskItem, checkBtn) {
    taskItem.remove();
    this.complete.appendChild(taskItem);
    checkBtn.style.display = "none";
  }

  deleteTask(taskItem) {
    taskItem.remove();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new taskManager();
});
