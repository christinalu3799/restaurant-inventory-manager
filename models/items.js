const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema ({
    item: {type: String, required: true},
    // user can only choose 1 out of these 4 categories
    category: {type: String, enum: ['produce', 'meat', 'pantryOrFrozen', 'nonfood']},
    price: {type: Number, min: 0, required: true},
    units: {type: Number, min: 0, required: true},
    qtyPerUnit: {type: String, required: true}, 
    imageURL: String, 
    orderURL: String,
    notes: String, 
    deleted: {type: Boolean, default: false}
}, {timestamps: true})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item    
