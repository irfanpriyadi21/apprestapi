'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok('Api running', res);
};

//get All Mahasiswa
exports.getMahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa',function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });
}

//get Mahasiswa by id
exports.getMahasiswaById = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa =?', [id],
        function(error, rows, fields){
            if(error){
                connection.log(error);
            }else{
                response.ok(rows, res);
            }
    });
};