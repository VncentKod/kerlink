const deleteButtons = document.querySelectorAll('.js-delete-button');

deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', (event) => {
        const endpoint = `/admin/${deleteButton.dataset.id}`
        fetch(endpoint, {method: 'DELETE'})
            .then((response) => response.json())
            .then((data) => window.location.href = data.redirect)
            .catch((err) => {
                console.log(err);
            });
    });
});