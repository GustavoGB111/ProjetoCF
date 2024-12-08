document.querySelector('#Form-Login').addEventListener('submit', async function(event){
   event.preventDefault();

        const formData = new FormData(this);
        if (formData.get('Confirm-Senha-Input') == null || formData.get('Senha-Input') != null ||formData.get('Confirm-Senha-Input') != formData.get('Senha-Input')) {
        
        } else {
            const filteredData = {
                name: formData.get('Nome-Input'),
                email: formData.get('Email-Input'),
                password: formData.get('Senha-Input'),
                confirm_password: formData.get('Confirm-Senha-Input')
            };
    }
    } 
);

