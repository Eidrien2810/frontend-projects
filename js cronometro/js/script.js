const $ = item => document.querySelector(item);
        const $_ = item => document.querySelectorAll(item);
        const $screen = $("#screen");
        const $startButton = $(".start");
        const $stopButton = $(".stop");
        
        let [min, sec] = $screen.value.split(':').map(num => parseInt(num));
        let timer = null;
        // console.log($screen.value)
        function formatTimeDisplay() {
                const secDisplay = sec < 10 ? "0" + sec : sec;
                const minDisplay = min < 10 ? "0" + min : min;

                return `${minDisplay}:${secDisplay}`;
            }
        function startTimer() {
            clearInterval(timer);
            timer = setInterval(() => {
                [min, sec] = $screen.value.split(':').map(num => parseInt(num));
                min = (min > 60) ?60 : min;
                sec = (sec > 60) ?60 : sec;
                // console.log(min, sec)
                if (sec == 0  && min == 0){
                    stopTimer();
                    $screen.classList.add('flashClass')
                } 
                if (sec == 0 && min !== 0){
                    min--;
                    sec = 60;
                }
                if (sec !== 0) sec--;
                $screen.value = formatTimeDisplay();
            }, 1000)
        }
        function stopTimer() {
            clearInterval(timer)
        }

        $startButton.addEventListener("click", () => startTimer());
        $stopButton.addEventListener("click", () => stopTimer());
        $screen.addEventListener('focusin', () => {
            stopTimer()
            $screen.classList.remove('flashClass')
        });
        $screen.addEventListener('focusout', () => startTimer());