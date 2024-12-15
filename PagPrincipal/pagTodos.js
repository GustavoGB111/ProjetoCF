    //Função Active para a permanencia de estado de um botão ativo//desativo
    const buttons = document.querySelectorAll('.Main-Div-Button');
    const typeBox = document.querySelectorAll('Main-Div-Tipo-Valor');
    const BoxesInput = document.querySelectorAll('Main-Div-Valor-Box');

    buttons.forEach(button => {
         button.addEventListener('click', () => {
             buttons.forEach(btn => {
                 if (btn !== button && btn.classList.contains('active')) {
                     btn.classList.remove('active'); 
                    }
                     });
                      button.classList.toggle('active');
                     
                    });
                });

    //Função para modal
    const buttonOpenModal = document.querySelector("#Header-Title-Form-New_Value_Button");
    const modal = document.querySelector("#Pag-Modal");
    const buttonCloseModal = document.querySelector("#Close-Modal");

    buttonOpenModal.onclick = function () { //função abrir modal
        modal.showModal();
    }
    buttonCloseModal.onclick = function () { //função fechar modal
        modal.close();
    }
    //Função Form do Modal 
    const formModal = document.querySelector('Modal-Div-Form');
    if (formModal) {
        formModal.addEventListener('submit', (event) => {
            event.preventDefault();
            try { 
            const filteredDataMain = new FormData(formModal);
            const typeEntrada = filteredDataMain.get('Entrada');
            const typeSaida = filteredDataMain.get('Saida');
            const valueTransaction = filteredDataMain.get('ValueTransaction');
            if (typeEntrada >= 0 || typeSaida >= 0) {
                if(typeEntrada != null && typeSaida == null) {
                    const filteredDataMain = {
                        typeTransaction: typeEntrada,
                        valueTransaction: valueTransaction
                    }
                } else if (typeSaida != null && typeEntrada == null) {
                    const filteredDataMain = {
                        typeTransaction: typeSaida,
                        valueTransaction: valueTransaction
                    }
                } else {
                    throw new Error('Entrada Inválida');
                }
            } else {
                throw new Error('Entrada Inválida');
                }
                console.log(filteredDataMain);

                async function Cadastro(filteredDataMain) {
                    
                        const response = await fetch('/register/transaction', {
                            method: "POST",
                            body: JSON.stringify(filteredDataMain)
                        });
                
                        if (!response.ok) {
                            throw new Error('Erro na rede');
                        };
                        const resultOfRegister = await response.JSON();
                    };
            } catch (Error) {
                throw new ('Error:', Error);
            };
            });
    }
    



