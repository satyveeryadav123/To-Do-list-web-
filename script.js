const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");


addBtn.addEventListener("click", function(){
    //console.log("Button Clicked");

    
        const taskText =taskInput.value;
        //console.log(taskText);
        if (taskText===""){
            alert("Please enter a task");
            return;
        }
        const li= document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", function(){
            li.classList.toggle("completed");
        });
        // delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", function(event){
            event.stopPropagation(); // Prevent the click event from bubbling up to the li
            li.remove();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";

});
themeToggle.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.textContent = "☀️ Light Mode";

    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});
