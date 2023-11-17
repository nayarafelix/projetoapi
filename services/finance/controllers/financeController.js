const Finance = require('../models/financeModel')
const Client = require('../../client/models/clientModel')

exports.registerFinancialInformation = async (req, res) => {
    try {
        const { clientId, bank_name, account_type, cardholder_name, card_limit } = req.body

        // Verifica se o cliente existe
        const client = await Client.findById(clientId)
        if (!client) {
            return res.status(404).json({ output: 'Cliente não encontrado.' })
        }

        const newFinancialInformation = new Finance({
            client: clientId,
            bank_name,
            account_type,
            cardholder_name,
            card_limit,
        })

        await newFinancialInformation.save()

        client.financialInfo = newFinancialInformation._id
        await client.save()

        res.status(201).json({ output: 'Informações financeiras cadastradas com sucesso.' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ output: 'Erro no servidor' })
    }
}

exports.updateFinancialInformation = async (req, res) => {
    try {
        const financeId = req.params.id
        const { clientId, bank_name, account_type, cardholder_name, card_limit } = req.body

        // Verifica se o cliente existe
        const client = await Client.findById(clientId);
        if (!client) {
            return res.status(404).json({ output: 'Cliente não encontrado.' });
        }

        const financialInformation = await Finance.findOne({ _id: financeId, client: clientId })

        if (!financialInformation) {
            return res.status(404).json({ output: 'Informações financeiras não encontradas.' })
        }

        financialInformation.bank_name = bank_name;
        financialInformation.account_type = account_type;
        financialInformation.cardholder_name = cardholder_name;
        financialInformation.card_limit = card_limit;

        await financialInformation.save()

        res.status(200).json({ output: 'Informações financeiras atualizadas com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ output: 'Erro no servidor' });
    }
}