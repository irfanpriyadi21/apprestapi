'use strict';

module.exports = function(app){
    var json = require('./controller');

    app.route('/').get(json.index);

    app.route('/getMahasiswa').get(json.getMahasiswa);

    app.route('/getMahasiswa/:id').get(json.getMahasiswaById);
}