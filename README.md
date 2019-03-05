## HA Cypress Automation

## Features of the Project :-
1) Uses Page Object Model:-
PageCollection contains the object of all pages .
Page Objects contains selectors and action/fucntions of that page.
page objects call generic functions to perform tasks.
genric functions use cy object to perform actions/operations which are common methods that can be used across project.

2) Uses Mochawesome reporter for html reports.
3) Reads data from testData.json file instead of hardcoding it in registration page.

Steps to run this cypress Repo into Your machine :-

1) $ git clone 'repoUrl'

2) cd into the Project Directory and run :- 
- npm install

3) in the command line , also run :-
- npm install cypress

4) cd into the project directory and type :-(This command will run your test cases in headless mode and a recording will be saved in your $projectDir/videos folder)
- npm run cy:run --reporter mochawesome --record --spec "cypress\Tests\Test.spec.js"

5) To see the headed mode or debug , run the below command :-(This will run the cypress open command and a GUI will appear for debugging and object spy.)
- npm test

Now when a GUI opens , you can select your spec file e.g Test.spec.js and it will start running it into a browser window.




## Problems Encountered while building this project and their status:-
1) Cypress-xpath Bug :- While Going with cypress , i found its native library cypress-xpath , which enabled me to use xpaths over css selectors as its more powerful selector and I prefer using that. 
Well , after finishing most of code , at some point I started to face issues with the library that assertions were not working with it while they were working just fine with css selectors .
So , i raised a bug with details , You can read more about it here :-
https://github.com/cypress-io/cypress-xpath/issues/29

Solution :-
Due to this , you will find that I have used both css selectors as well as xpath selectors in this project and their built their common methods accordingly as workaround.


2) Running of paramterized test cases through excel/json:- (This will come under unit testing framework e.g Jasmine/Mocha)
Right now we have a json file from which we are picking up the data ($projectdir/testData.json)
-- if we could do this using excel , it would have been a great feature.
-- if we could have different tests for different parameters of data just like dataprovider in testNG , that would be significantly better.

I have tried it using :-
a) a node library called ('xlsx') , this library converted excel to json successfully , but we could not load it before the test case starts as cypress insists on running everything within browser , we shall get a fs.readFileSync is not a function error.
b) even if we use cy.task() to use xlsx in node context , it would mean that we are running a for loop in our test case and it will essentially be only one single test case.

Further communication can be read here :- https://github.com/cypress-io/cypress-example-recipes/issues/140

Solution :- Not yet Available , for loop can be applied within test but that will not solve the problem


3) Thre is a comaptibility mistmatch between mocha 6 and mochawesome reporting library 3 .
Solution:- Downgrade Mocha to 5.2.0

