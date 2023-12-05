/*
Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:
const finestraBrowser = {
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
};

Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
*/



const finestraBrowser = {
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
};

// Funzione per chiudere un social dalla finestra del browser
function chiudiSocial(browser, social) {
    const index = browser.tab.indexOf(social);

    // Verifica se il social è presente nelle tab
    if (index !== -1) {
        // Rimuove il social dalle tab
        browser.tab.splice(index, 1);

        // Verifica se la tab chiusa era quella attiva
        if (index === browser.activeTab) {
            // Attiva la tab successiva, se presente
            if (browser.tab.length > 0) {
                if (index === browser.tab.length) {
                    // Se l'ultima tab è stata chiusa, attiva l'ultima rimanente
                    browser.activeTab = index - 1;
                } else {
                    browser.activeTab = index;
                }
            } else {
                // Se non ci sono più tab, reimposta l'indice a 0
                browser.activeTab = 0;
            }
        }
    }
}

// Esempio di utilizzo
console.log("Finestra iniziale:", finestraBrowser);

// Chiude "Facebook" dalla finestra del browser
chiudiSocial(finestraBrowser, "Facebook");

console.log("Finestra dopo la chiusura di Facebook:", finestraBrowser);
