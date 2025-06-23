window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', () => {
        const dayValue = document.getElementById('day').value;
        const monthValue = document.getElementById('month').value;
        const yearValue = document.getElementById('year').value;

        const day = parseInt(dayValue, 10);
        const month = parseInt(monthValue, 10) - 1;
        const year = parseInt(yearValue, 10);

        const displayError = document.getElementById('display-error');
        displayError.textContent = '';

        if (
            !dayValue || !monthValue || !yearValue ||
            isNaN(day) || day < 1 || day > 31 ||
            isNaN(month) || month < 0 || month > 11 ||
            isNaN(year) || year < 1000 || year > new Date().getFullYear()
        ) {
            displayError.textContent = 'invalid date';
            return;
        }

        const birthDate = new Date(year, month, day);
        const today = new Date();

        const differenceInTime = today.getTime() - birthDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

        const popupWindow = document.getElementById('popup-window');
        const popupContent = document.getElementById('popup-content');
        popupContent.textContent = `You were born ${differenceInDays} days ago!🎉`;

        popupWindow.style.display = 'block';
    });
    document.getElementById('close-popup').addEventListener('click', () => {
        document.getElementById('popup-window').style.display = 'none';
    });
});