# Exobiology-Scientist-List
Create a full CRUD app on a make believe scenario to register scientist on exobiology project.
It come with a default 2 scientists at the server.
User can add new scientist, view existing scientist, edit existing scientist, and delete individual scientist.

### Goal
Full CRUD App

### Technology Used
- Javascript
- Node / Express
  - express
  - nodemon
  - ejs
  - method-override
- CSS Template
  - https://materializecss.com/

### Function
- Index page (GET - render index.ejs) to show the list of all scientist ('/')
- Add page (GET - render add.ejs) to register new scientist to Exobiology ('/add')
- Edit page (GET - render edit.ejs) to edit existing scientist to Exobiology ('/edit/:idx')
- Show page (GET - render show.ejs) to view details of existing scientist to Exobiology ('/:idx')
- Add function (POST - using <form>) to add new scientist to Exobiology ('/:idx')
- Update function (PUT - using <form> with method-override) to update existing scientist to Exobiology ('/:idx')
- Delete function (DELETE - using <form> with method-override) to delete existing scientist to Exobiology ('/del/:idx')

### Screenshots
- Listing Page
<img src="https://github.com/lyyyn/Exobiology-Scientist-List/blob/master/screenshots/scientist_listing.GIF" width="500px"/>

- View Page
<img src="https://github.com/lyyyn/Exobiology-Scientist-List/blob/master/screenshots/scientist_view.GIF" width="500px"/>

- Add Page
<img src="https://github.com/lyyyn/Exobiology-Scientist-List/blob/master/screenshots/scientist_add.GIF" width="500px"/>

- Edit Page
<img src="https://github.com/lyyyn/Exobiology-Scientist-List/blob/master/screenshots/scientist_edit.GIF" width="500px"/>