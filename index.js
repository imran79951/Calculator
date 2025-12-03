const input = document.querySelector(".inp");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        /* Clear All  */
        if (value === "AC") {
            string = "";
            input.value = "";
            return;
        }

        /* single digit backspace */
        if (value === "C") {
            string = string.slice(0, -1);
            input.value = string;
            return;
        }

        /* Equal to the final values */
        if (value === "=") {
            try {
                let exp = string.replace(/÷/g, "/").replace(/x/g, "*");
                string = eval(exp).toString();  
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
            return;
        }

        /* Append button value to input */
        string += value;
        input.value = string;
    });
});



