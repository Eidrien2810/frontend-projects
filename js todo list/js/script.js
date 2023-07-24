const $ = el => document.querySelector(el);
        const $_ = el => document.querySelectorAll(el);

        const $input = $('#input');
        const $submitButton = $('#submitButton');
        const $list = $('#list');

        document.addEventListener('DOMContentLoaded', setTask("Answer your e-mails", "Send mom a birthday", "Buy more post-its", "Wake up in the morning"))
        function createTask(task){
            const listItem = document.createElement('li');
            const check = document.createElement('input');
            check.type = 'checkbox';
            check.addEventListener('change', (e) => {
                setTimeout(() => listItem.classList.add('disappear'), 1000)
            })
            listItem.textContent = task;
            listItem.prepend(check);
            return listItem;
        }
        function sendTask (value){
            if (value.match(/^\s+$/ig) || value === "") return false;
            const task = createTask(value);
            $list.append(task);
            $input.value = "";
        }
        function setTask(...list){
            list.forEach(task => {
                if (typeof task !== 'string') return false
            });
            list.forEach(task => sendTask(task));
        }
        $input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter'){
                sendTask(e.target.value);
            }
            
        });
        $submitButton.addEventListener('click', (e) => sendTask($input.value));