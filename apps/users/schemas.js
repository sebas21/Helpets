'use strict';
const mongoose = require('../../config/mongoose'),
	  Schema = mongoose.Schema;

const schemas = {

	userSchema: new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},  
    Cedula: {
        type: String,
        required: true,
        unique: true
    },
    Nombre: {
        type: String,
        required: true,
        maxlength:[15,"Nombre muy grande"],
        maxlength:[2,"Nombre muy grande"]
    },
    Apellido: {
        type: String,
        required: true
    },
    Correo: {
        type: String,
        required: true        
    }
	
	})

};

module.exports = schemas;