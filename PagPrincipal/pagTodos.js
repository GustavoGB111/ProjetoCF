    const typeBox = document.querySelectorAll('Main-Div-Tipo-Valor');
    const BoxesInput = document.querySelectorAll('Main-Div-Valor-Box');
    //design de clique dos botões

    const buttons = document.querySelectorAll('.Main-Div-Button');
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
    
    //funcionalidade de filter para botões
    const todosButton = document.querySelector('all-Button');
    const entradaButton = document.querySelector('entrada-Button');
    const saidaButton = document.querySelector('saida-Button');
    const divTransacoes = document.querySelector('Main-Div-Valores');

    //Todos
    todosButton.addEventListener('click', (event) => {
        event.preventDefault();
        async function Cadastro() {
            const response = await fetch('/get/transactions', {
                method: "GET"
            });
    
            if (!response.ok) {
                throw new Error('Erro na rede');
            };
            const resultRegister = await response.JSON();
            resultRegister.forEach(usuario => {
                const divUsuario = document.createElement('div');
                divUsuario.classList.add('Main-Div-Valor-Box');
                const valor = document.createElement('div');
                valor.classList.add('Main-Div-Valor');
                valor.textContent = `${usuario.Value}`;
                const tipoValor = document.createElement('div');
                tipoValor.classList.add('Main-Div-Tipo-Valor');
                tipoValor.textContent = `${usuario.Type}`;

                divUsuario.appendChild(valor);
                divUsuario.appendChild(tipoValor);

            });
        };
    });

    //Entrada
    entradaButton.addEventListener('click', (event) => {
        event.preventDefault();
        async function Cadastro() {          
            const response = await fetch('/get/transactions', {
                method: "GET"
            });
    
            if (!response.ok) {
                throw new Error('Erro na rede');
            };
            const resultRegister = await response.JSON();
            const resultRegisterEntrada = resultRegister.filter(usuario => usuario.Type == "Income");
            resultRegisterEntrada.forEach(usuario => {

            });
        };
    });

    //Saída
    saidaButton.addEventListener('click', (event) => {
        event.preventDefault();
        async function Cadastro() {          
            const response = await fetch('/get/transactions', {
                method: "GET"
            });
    
            if (!response.ok) {
                throw new Error('Erro na rede');
            };
            const resultRegister = await response.JSON();
            const resultRegisterSaida = resultRegister.filter(usuario => usuario.Type == "Outcome");
            resultRegisterSaida.forEach(usuario => {

            });
        };
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
    



