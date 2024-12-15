    //Função Active para a permanencia de estado de um botão ativo//desativo
    const buttons = document.querySelectorAll('.Main-Div-Button');
    const typeBox = document.querySelectorAll('Main-Div-Tipo-Valor');
    const BoxesInput = document.querySelectorAll('Main-Div-Valor-Box');

    buttons.forEach(button => {
         button.addEventListener('click', () => {
             buttons.forEach(btn => {
                 if (btn !== button && btn.classList.contains('active')) {
                     btn.classList.remove('active'); }
                     });
                      button.classList.toggle('active'); 
                    }); });

    //Função para modal
    const buttonOpenModal = document.querySelector("#Header-Title-Form-New_Value_Button")
    const modal = document.querySelector("#Pag-Modal")
    const buttonCloseModal = document.querySelector("#Close-Modal")

    buttonOpenModal.onclick = function () { //função abrir modal
        modal.showModal()
    }
    buttonCloseModal.onclick = function () { //função fechar modal
        modal.close()
    }

    //Função Form do Modal 
    const formModal = document.querySelector('Modal-Div-Form')
    formModal.addEventListener('submit', (event) => {
        event.preventDefault();
        const filteredDataMain = new FormData(formModal);
        const typeTransaction = filteredDataMain.get('InputType');
        const valueTransaction = filteredDataMain.get('ValueTransaction');
        if (valueTransaction <= 0 || typeTransaction == null) {
            alert('Error')
        } else {
            const filteredDataMain = {
                typeTransaction: typeTransaction,
                valueTransaction: valueTransaction
            }
            console.log(filteredDataMain)
        }

    });

