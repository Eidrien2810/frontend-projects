 /* 
            En la pantalla que aparesca las operaciones
            Agregar numeros
            Efectuar operaciones
            
        */
            const $ = item => document.querySelector(item);
            const $_ = item => document.querySelectorAll(item);
    
            const $screen = $('.screen');
            let result = "0";
            const $calc = $('.calc');
    
            $calc.addEventListener('click', (e) => {
                if (e.target.dataset.operation == 'clear'){
                    // result = (result.length > 1) ? result.slice(0, -1) : "0";
                    result = result.slice(0, -1);
                } 
                if (e.target.dataset.operation == 'equal'){
                    result = result || '0'
                    result = (!Number.isInteger(eval(result))) 
                    ? eval(result).toFixed(2)
                    : eval(result);
                    result = result.toString()
                }
                if (e.target.dataset.operation && e.target.dataset.operation !== 'clear' && e.target.dataset.operation !== 'equal'){
                   result += e.target.dataset.operation;
                } else if (e.target.dataset.num){
                    result += e.target.dataset.num;
                }   
                $screen.textContent = (result.length === 0) 
                    ? "0"
                    : operationSign(result);
            })
    
            
            function operationSign(line = ""){
                line = line.toString()
                const operations = {
                    "*": "x",
                    "/": "÷",
                    "+": "+",
                    "-": "-"
                }
                let newLine = "";
                for (let i = 0; i < line.length; i++) {
                    newLine += (!operations[line[i]]) ?line[i] :operations[line[i]];
                }
                return newLine;
            }