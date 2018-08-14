# Hosting on Firebase

```
npm install --save-dev firebase-tools
```

In package.json, add the following scripts:

```
	"deploy": "npm run build && firebase deploy",
	"firebase-init": "firebase login && firebase init"
```

The firebase-init script is only ran one time. 

At the Firebase CLI, select, 

```
Hosting: Configure and deploy Firebase Hosting sites

[create a new project] 
```

Select "dist" as your public directory. Select Yes to "Configure as a single-page app".

Note this:

```
Project creation is only available from the Firebase Console
Please visit https://console.firebase.google.com to create a new project, then run firebase use --add

```

```
./node_modules/firebase-tools/bin/firebase use --add react-battle-cbdb8
```

Then run, 

```
npm run deploy
```
