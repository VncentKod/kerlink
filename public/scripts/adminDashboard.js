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

const addButtons = document.querySelectorAll('.js-add-button');

let dataFront;
addButtons.forEach((addButton) => {
    addButton.addEventListener('click', (event) => {
        const endpoint = `/admin/${addButton.dataset.id}`
        fetch(endpoint, {method: 'GET'})
            .then((response) => response.json())
            .then((something) => {
                dataFront = something.data.result;
                const companyName = addButton.dataset.company;
                download(dataFront, companyName);
                window.location.href = data.action.redirect;
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

const disconnect = document.querySelector('.js-disconnect-button');

disconnect.addEventListener('click', (event) => {
    const endpoint = '/admin'
    fetch(endpoint, {method: 'PUT'})
        .then((response) => response.json())
        .then((data) => window.location.href = data.action.redirect)
});

function download(jsonData, companyName) {
    // Votre objet JSON
    jsonData = makeDataBeautiful(jsonData);
    // Convertir l'objet JSON en chaîne de caractères
    var jsonString = JSON.stringify(jsonData);

    // Créer un nouveau Blob contenant la chaîne JSON
    var blob = new Blob([jsonString], { type: "application/json" });

    // Télécharger le fichier en utilisant FileSaver.js
    saveAs(blob, `${companyName}.json`);     
}

function makeDataBeautiful(dataFront) {
    return {
        Date: dataFront.date,
        Company: dataFront.company,
        StreetNumber: dataFront.street,
        StreetName: dataFront.street_n,
        City: dataFront.city,
        ZIP:dataFront.zip,
        Country:dataFront.country,
        FirstName: dataFront.client_name,
        LastName: dataFront.client_name_2,
        PhoneNumber: dataFront.phone,
        Mail: dataFront.mail_c,
        SupportFirstName: dataFront.name_sup,
        SupportLastName: dataFront.last_name_sup,
        SupportPhone: dataFront.phone_sup,
        MailSupport: dataFront.mail,
        Start: dataFront.start_date,
        NetSize: dataFront.netSize,
        Periodicity: dataFront.periodicity
        }
}