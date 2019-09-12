Welcome to Dream Home, a Pinterest inspired site intended for sharing pictures of home decor (or anything the users want really!)

Because this app is not deployed to Heroku yet, use these steps to run the app:

1) Download the files for the application any way you want, as well as MongoDB onto your computer.

2) Go into the server folder, and add an ENV file (name the file .env) with the following content inside it:

NODE_ENV=dev
MONGO_URI=mongodb://localhost:27017
SECRET=secret
AWS_SECRET_ACCESS=iXh1g9266JEVWUMBkZGNGpb2YqFiDIfgGuC4dGkh
AWS_ACCESS_KEY=AKIAUNSEVHCWO3RWLEOW

3) Open two separate instances of your command line.

4) Have one set in the client directory of the application, and one set in the server directory.

5) In the command line for "client" type "npm start" to start the UI for the application, and in the command line for "server" type "npm run dev" to start the server.

6) Now you should be ready to play with the app! Try signing up with multiple users, and adding posts and boards to interact with the site!
