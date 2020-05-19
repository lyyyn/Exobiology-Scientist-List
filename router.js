const func = require('./controller');
	
module.exports = (app) => {
// Index
    app.get('/', func.index);

    // new - need to show a form
    app.get('/new', func.init);

    // show
    // remember :index acts as a 'catchall for any url'
    app.get('/:idx', func.show);

    // create - actually create a new item
    app.post('/', func.create);

    // edit
    app.get('/edit/:idx', func.edit);

    // update
    app.put('/:idx', func.update);

    // delete
    app.delete('/del/:idx', func.delete);
};
