document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.getElementById('counter-value');
    const btnIncrement = document.getElementById('btn-increment');
    const btnDecrement = document.getElementById('btn-decrement');
    const btnReset = document.getElementById('btn-reset');

    let count = 0;

    const updateDisplay = () => {
        counterValue.textContent = count;
        
        // Add dynamic bump effect
        counterValue.classList.remove('bump');
        void counterValue.offsetWidth; // Trigger reflow to restart CSS animation
        counterValue.classList.add('bump');
    };

    btnIncrement.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    btnDecrement.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    btnReset.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
});
