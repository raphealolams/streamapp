// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var fs = require('fs');
var app = require('electron').remote;
var dialog = app.dialog;

//Document Element here
var fileButton = document.getElementById('file-button');

//Add Event Listener
fileButton.addEventListener('click', () => {
    //Open File Dialog box
    dialog.showOpenDialog((filenames) => {
        // if Empty alert Users
        if (filenames === undefined) {
            alert("No File Selected");
            return;
        }

        //Read File with 'fs'
        fs.readFile(filenames[0], (err, data) => {
            //If Error Alert User
            if (err) {
                alert(err.message);
                return;
            }
        })
    })
});