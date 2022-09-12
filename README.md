# Deezerclone
The repository has two application, **deezerapi** and **deezerapp**.
- **deezerapi** - is RESTful API application built with Nodejs and Express. The application is connecting to Deezer APIs https://api.deezer.com/
- **deezerapp** - is Mobile application buit with React-Native app. The application is consuming data from **deezerapi** through RESTful API


# Requirements
- XCode or Android Studio
- Nodejs _(recommended latest npm)_

# Setup
You need to clone the repository to your local machine and follow the steps below to run the applications. <br/><br/>
**clone the project**
```
git clone https://github.com/PatrickPhadi/deezerclone.git
```
**goto deezerapi directory**
```
cd deezerclone/deezerapi
```
**install dependencies**
```
npm install
```
**run the deezerapi application**
```
npm start
```

You will notice that server will be running on port 4040 <br />
```
   server is running on PORT: 4040
   server is running...
```

**from deezerapi goto deezerapp**
```
cd ..
```
**install dependencies**
```
npm install
```
**install pods for iOS**
```
npx pod-install
```
**Run the application of your choice** _(depending on which IDE installed on your machine)_
**android** or **ios** <br />

**Run iOS**
```
npx react-native run-ios
```

**Run Android**
```
npx react-native run-android
```

# Running App
Should be able to search artists by names

