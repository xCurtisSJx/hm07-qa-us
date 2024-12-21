# Sprint 7 Project

## The objective of my project is to create test for GET, POST, PUT, and DELETE request for the API Urban Groceries

## Install Instructions 

### Visual Studio
1. Got to code.visualstudio.com 
2. Download the proper version for your computer

### Git and GitHub
1. Install Git from the link provided in the Project 7 instructions
2. Link TripleTen account to GitHub using link provided in the project instructions 
3. Open GitBash and create the projects directory
* cd ~                      - Return to home directory
* mkdir projects            - Create a folder called projects
* cd projects               - change directory into the new projects folder
4. In GetBash, clone the repository hm07-qa-us
* // if you are using HTTPS - git clone https://github.com/username/hm07-qa-us.git
* // If you are using SSH   - git clone git@github.com:username/hm07-qa-us.git
5. Installing NPM
* Inside GitBash in the projects folder use command npm install
6. Open VS Code. Select file > Open folder > hm07-qa-us

## Test Instructions 
* In config.js (within the hm07-qa-us folder), replace the URL in API_URL: with the active server provided to update server

### Complete 5 Testing Tasks  //a minimun of 2 test per task
1. Test for GET request for the getHandlers.test.js file
* Check the response status code
* Check the response status body
2. Test for POST request for the postHandlers.test.js file
* Check the response status code
* Check the response status body
3. Check for PUT request for the putHandlers.test.js file
* Check the response status code
* Check the response status body
4. Check for DELETE request for the deleteHandlers.test.js file
* Check the response status code
* Check the response status body
- Run test using the npx jest command in the terminal inside the project file
5. Write a README.md file
// the file should include
* Projects name
* Description of the project
* Description of the technologies and techniques used
* & instructions on how to run the tests
       
## Documentation sources used
* apiDoc
* web.postman.co

## Commit and push   //inside the terminal in the projects folder use the commands below in this order
1. git add -A
2. git commit -m "Project 7"
3. git push -u origin main 
