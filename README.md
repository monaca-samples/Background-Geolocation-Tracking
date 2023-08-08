# Background Geolocation Tracking
> This is a hybrid, mobile phone application that tracks the geolocation of the user.

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)

## Technologies Used
- Ionic Capacitor
- Next.js
- React Bootstrap
- React Leaflet
- [Background Geolocation Plugin](https://github.com/capacitor-community/background-geolocation)
- [Local Notifications Plugin] (https://capacitorjs.com/docs/apis/local-notifications)

## Features
The app is able to:
- Detect the change of the geolocation of the user, even when the app is in the background
- Pinpoint the location on a map
- Draw a polyline that connects all the location points the user has been to

## Setup
Make sure you have Node.js and Capacitor CLI installed. Download the project or clone by typing:
`git clone https://github.com/monaca-samples/Background-Geolocation-Tracking.git`

## Usage
Open a native project either on Android Studio or Xcode by typing:
`npx cap open ios/android`

Build the project and run it on a mobile device or emulator.
