# PWA-text-editor [![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
This *Progressive Web App* (PWA) is a text editor application that uses *Webpack*, *Workbox*, and *IndexedDB*. It possesses both online and offline functionality. 

This application is deployed with **Heroku**:
### [Deployed Application](https://pwa-jate-text-editor.herokuapp.com/)

## Table of Contents
* [Screenshots](#screenshots)
* [Demo](#demo)
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Questions](#questions)

## Demo
### [Click here to watch a walkthrough video!](https://watch.screencastify.com/v/ObTVBnqg6WWuLbhiXnUv)

## Screenshots
The `manifest.json` file:
![jate-manifest](https://user-images.githubusercontent.com/108302822/208798124-207783cc-3751-4e6e-80b8-fbb0c9a9260f.png)
Registered service worker:
![jate-sw](https://user-images.githubusercontent.com/108302822/208798139-93689ba9-567c-4d11-9a1f-35aa4f5a40a8.png)
IndexedDB storage:
![jate-indexedDB](https://user-images.githubusercontent.com/108302822/208798148-e4eb0049-cac8-416e-8fac-86997ada0cf3.png)

## Usage

There are two methods to use this application:

1. Use the link above to access the deployed application.
2. To use this back-end application, fork the repository, clone the repository, or download the ZIP file to access the code for yourself. This will require you to have a text editor. I recommend Visual Studio Code, but there are a plethora of other options available.

Next, follow the Installation instructions below.

Then, open the application folder and enter `npm run start:dev` and open the app at http://localhost:3000/.

## Installation
1. Ensure node.js is installed. 
2. Ensure there is a `.gitignore` file (with `node_modules` and `.DS_Store` written inside) before installing any npm dependencies. 
3. Create a `package.json` file by entering the `npm init -y` command in the terminal. 
4. Use the following command to run the install script, and install required dependencies: `npm run install`

## License

    Copyright 2022 Caleb Lacson

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        [http://www.apache.org/licenses/LICENSE-2.0]

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

## How to Contribute
Fork the repository to make the code your own. Feel free to submit a push request if you have made additions you think others would find beneficial.

## Questions
If you have any questions regarding this project, or anything else regarding my work, please reach out to me via email or GitHub.

[caleb.lacson@gmail.com](caleb.lacson@gmail.com)
  
[github.com/clacson95](github.com/clacson95)
