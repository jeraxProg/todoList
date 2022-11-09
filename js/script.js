let addTaskBtn = document.querySelector("#addBtn");
addTaskBtn.addEventListener("click", addTask);

let inputTaskValue = document.querySelector("#todoTask");

function addTask() {
    //get value from input
    let todoTask = document.querySelector("#todoTask").value;

    // get parent node
    let taskList = document.querySelector("#taskList");

    // create child nodes
    let taskItem = document.createElement("div");
    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.classList = "input"
    taskInput.setAttribute("disabled", ""); //add disable attribute
    taskInput.value = todoTask;
    taskInput.defaultValue = todoTask;


    // create edit btn
    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<span class="material-symbols-outlined">
    edit
    </span>`;
    editBtn.id = "editBtn"
    editBtn.classList= "taskBtn";
    editBtn.style.border="none"
    editBtn.style.padding= "1px"
    editBtn.style.textAlign="center"
    editBtn.addEventListener("click", editValue)

    //delete btn
    let delBtn = document.createElement("button");
    delBtn.type = "submit";
    delBtn.id = "delBtn";
    delBtn.classList="taskBtn"
    delBtn.style.padding= "1px"
    delBtn.style.border="none"
    delBtn.innerHTML = `<span class="material-symbols-outlined">
    close
    </span>`;
    delBtn.addEventListener("click", delItem);


    // append child nodes
    taskList.appendChild(taskItem);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(delBtn);


    let count = document.getElementById("taskList").childElementCount;
    if (count == 5) {
        document.getElementById("addBtn").disabled = true;
        alert("Maximum")
        
        
    } else if (count < 4) {
        document.getElementById("addBtn").disabled = false;
        
    }
    inputTaskValue.value = ""



    function editValue() {

        //remove disabled attribute
        taskInput.removeAttribute("disabled", "");
        editBtn.setAttribute("disabled", "");

        //create save btn
        let saveBtn = document.createElement("button");
        saveBtn.innerHTML = `<span class="material-symbols-outlined">
        done
        </span>`;
        saveBtn.id = "saveBtn"
        saveBtn.classList = "taskBtn";
        
        saveBtn.style.border="none"
        saveBtn.style.padding= "1px"
        saveBtn.addEventListener("click", saveValue);

        //append save btn
        taskItem.appendChild(saveBtn);

        function saveValue() {
            let text = "The task name change to" + " " + taskInput.value;

            if (confirm(text) == true) {
                editBtn.removeAttribute("disabled", "");
                //get new value
                let newValue = taskInput.value;

                //
                taskInput.defaultValue = newValue;


                //disable input Type
                taskInput.setAttribute("disabled", "")
                // hide save button

                taskItem.removeChild(saveBtn);

                text = "Saved Succesfully";
            } else {
                text = "Cancelled";
                //enable edit button again
                editBtn.removeAttribute("disabled", "");

                //disable input Type
                taskInput.setAttribute("disabled", "")
                // hide save button

                taskItem.removeChild(saveBtn);

                taskInput.value = taskInput.defaultValue;
            }
            alert(text);

        }

    }


    function delItem() {
        this.parentNode.remove();

        let count = document.getElementById("taskList").childElementCount;
        if (count == 5) {
            document.getElementById("addBtn").disabled = true;
            
        } else if (count < 5) {
            document.getElementById("addBtn").disabled = false;
        }
       

       




    }



}
const d = new Date();
document.getElementById("demo").innerHTML = d;

