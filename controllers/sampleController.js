exports.getMessage = (req, res, next) => {
    try {
        // Simulando um erro para testar o middleware de tratamento de erros
        throw new Error('Erro ao obter a mensagem');
    } catch (error) {
        next(error);
        return; // Interrompe a execução do código para evitar enviar múltiplas respostas
    }

    // Enviar a resposta apenas se nenhum erro ocorrer
    res.status(200).json({ message: 'Bem-vindo à minha mini API!' });
};

//Obs: Para receber a mensagem Bem-vindo à minha mini API! é necassrio comentar a linha 4 onde estoura o erro.
