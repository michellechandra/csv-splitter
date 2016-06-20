# Proxy APP to Import CSV to CartoDB

### Directions to Install Manually with Heroku

1) Create an account with [Heroku](http://www.heroku.com) 

2) Download [node.js](http://nodejs.org/). Verify that node is installed on your machine with the ```node``` command in Terminal. If you don't get an error, it's installed! You can exit the node process with Ctrl+c.

3) Download and install the [Heroku Toolbelt](https://toolbelt.heroku.com), which will give you the Heroku Command Line Interface.

4) Download this repo and navigate to the folder with Terminal

5) Run ```npm install package.json``` to get all required libraries.

6) Login to Heroku

```
heroku login
```

You will be prompted to enter your credentials.

6) Setup a Git repository and your Heroku app
```
git init
git add .
git commit -m "init commit"
```

7) Create the Heroku app
```
heroku create
```

8) With your heroku app set-up, you can rename it.

```
heroku rename your-new-name
```

Your app will now be available at your-app-name.herokuapp.com

9) Deploy your app

```
git push heroku master
```

9) Open your app with the command:

```
heroku open
```

10) You may need to deploy dynos to run your app if your app is asleep:

```
heroku ps:scale web=0
```

11) If your app crashes, restart it:

```
heroku restart
```

12) To view logs for your app (and to see any error messages):

```
heroku logs --tail
```

See more information on running a Node.js Heroku app [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
