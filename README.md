# Introduction 
The purpose of this challenge is to highlight the engineer’s skills. Therefore, feel free to show-off and speak to your solution for how and why you chose to do things the way you choose to do them.

Assessment:
1.	Using Angular 15 or above using VS Code (not Visual Studio) and .NET 7 or above using Visual Studio, create a simple CRUD application for "Customer" (First Name, Last Name, Email, Created Date/Time, Last Updated Date/Time) communicating to service.
2.	Allow for Updates from the list of customers while requiring adds via form
3.	Ensure the application uses session storage to highlight the last customer selected.
4.	Ensure application has at least 20 records.
5.	Provide repository link for Dynatron Tech Team to download code for review.
6.	Be prepared to speak to your solution on scheduled Tech Call.

# Technologies used
- Database Engine: SQL Server 2022 Express
- .Net 8.0: API Project
- NPM 10.8.2
- Node: 20.16.0
  
Angular: 16.2.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, material-moment-adapter, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@angular/cli                    16.2.0
@schematics/angular             16.2.0
rxjs                            7.8.1
typescript                      5.1.6
zone.js                         0.13.1

# Getting Started
1. Clone repo - both Visual Studio and VSCode (Angular) projest come together
2. Restore Nuget packages and npm install on angular project
3. Restore database: Dynatron.bak file is provided (folder: BD)

# Build and Test
BackEnd Project
1. Make sure you have credentials for your SQL Server instance
2. Within Visual Studio solution > BackEnd.API > appsettings.json update the DynatronSQL to set your credentials
3. Build and run the solution (Debug or without debug)
4. You must see Swagger with authentication enabled

FrontEnd Project
1. Open _ClientApp folder into VSCode
2. Open terminal and run > npm install --force (some warnings should appear due to versions)
3. run the command > ng serve -o
4. You must see the login page

Test Data - Admin Access: email: john.doe@example.com | pwd: JS3Ml3Al5

Test Data - Read Access: email: jimmy.doe@example.com | pwd: Js3Ml3Al

Test Data - Report Access: email: jett.doe@example.com | pwd: Js3Ml3Al

=========== Goals achieved ===========
- DB Development
  - Tables: DynatronCustomer, DynatronUser, Menu, UserProfile and Profile_Has_Menu
  - Relationships between tables
  - Dummy data for testing
  - Database Diagram included
- Backend API
  - Clean Architecture: I tried to follow the clean archictecture and it's principles
    - Services and Contracts
    - Dependency Injection
    - Multilayer distribution
  - Handle CRUD operations - delete is ready to use, however, I added a STATUS column to define Active/Inactive customers instead of deleting
- FrontEnd
  - Clean Architecture: Similar to the BackEnd I created a variation of Clean Archicture inside Angular project to keep structure and order
  - JWT Authentication: I created an HTTP Interceptor to add user's token to each request
  - Login and Session management logic
  - Navigation and Routing
  - Multilevel menu: for this case I created a 3 level menu
  - Customer's table: I only had enough time to create this table, I wanted to add: Create and Edit functionalities, I ran out of time
