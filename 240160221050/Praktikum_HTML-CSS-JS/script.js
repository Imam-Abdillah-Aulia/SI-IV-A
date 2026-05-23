        function generateRandomColor() {
           var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
           return randomColor;
       }

       function changeBackgroundColor() {
           document.body.style.backgroundColor = generateRandomColor();
       }

       window.onload = function() {
           changeBackgroundColor();
       };

        function showWelcomeMessage() {
            alert("Selamat datang di portofolio saya!");
        }

        window.onload = function() {
            changeBackgroundColor();
            showWelcomeMessage();
            displayProjects();
            displayExperience();
        };