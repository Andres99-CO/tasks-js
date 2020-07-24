// console.log(document.getElementById('formTask'));
window.onload = function () { 
    document.getElementById('formTask').addEventListener('submit', saveTask);
    
    function saveTask(e) {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        // console.log(title);
        // console.log(description);

        e.preventDefault();
    }
 }

 