const func = require('./controller');
	
module.exports = (app) => {
// Index
    app.get('/scientists', func.index);

    // new - need to show a form
    app.get('/scientists/new', func.init);

    // show
    // remember :index acts as a 'catchall for any url'
    app.get('/scientists/:idx', func.show);

    // create - actually create a new item
    app.post('/scientists/', func.create);

    // edit
    app.get('/scientists/edit/:idx', func.edit);

    // update
    app.put('/scientists/:idx', func.update);

    // delete
    app.delete('/scientists/del/:idx', func.delete);
};
