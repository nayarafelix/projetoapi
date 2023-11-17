const mongoose = require('../database/connection')

const financeSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    bank_name: { type: String, required: true },
    account_type: { type: String, required: true },
    cardholder_name: { type: String, required: true },
    card_limit: { type: Number, required: true },
})

const FinanceModel = mongoose.model('finance', financeSchema)

module.exports = FinanceModel