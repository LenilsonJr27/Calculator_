document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display p");
    let buttons = document.querySelectorAll(".botao");

    let currentInput = "";
    let resetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.id;
            if (value === "c") {
                currentInput = "";
                display.textContent = "0";
            } else if (value === "apagar") {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput || "0";
            } else if (value === "igual") {
                try {
                    currentInput = currentInput.replace(/,/g, '.');

                    currentInput = eval(currentInput).toString();

                    display.textContent = currentInput.replace(/\./g, ',');
                    resetDisplay = true;
                } catch (error) {
                    display.textContent = "Erro";
                    currentInput = "";
                }
            } else if (value === "+/-") {
                if (currentInput !== "") {
                    if (currentInput.startsWith("-")) {
                        currentInput = currentInput.substring(1);
                    } else {
                        currentInput = "-" + currentInput;
                    }
                    display.textContent = currentInput;
                }
            } else {
                if (resetDisplay) {
                    currentInput = "";
                    resetDisplay = false;
                }
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
