// document.getElementById('completeButton').addEventListener('click', function() {
//     alert('Completed your task');
//     completeButton.disabled = true;
// })
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 6; i++) {
        const completeButton = document.getElementById(`completeButton${i}`);
        if (completeButton) {
            completeButton.addEventListener('click', function() {
                alert(`Task ${i} completed!`);
                completeButton.disabled = true;
            });
        }
    }
});