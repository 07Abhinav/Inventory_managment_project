const mongoose = require('mongoose');

const RetailerSchema = new mongoose.Schema(
    {
        RetailerName:{
            require: true,
            type: String,
        },
        RetailerId:{
            
            type: String,
        },
        Role:{
            
            type: String,
        },
        ContactNumber:{
            require: true,
            type: String,
        },
        Password:{
            require: true,
            type: String,
        }
    },
    {
        collection: 'Retailer'
    }
)

module.exports = mongoose.model('Retailer', RetailerSchema)