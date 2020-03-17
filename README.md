# MVAD for Electron

---

Build Status
[![Build Status](https://travis-ci.org/mvwater/mvwater-electron.svg?branch=master)](https://travis-ci.org/mvwater/mvwater-electron)

---

A half-hearted attempt at Electron development for the MVAD project, which will (at some point) include a backend to do some processing with SQL.

We don't suggest trying to clone this repository on a cell connection, since it's decidedly large.

## Specifications

- Windows 10 1904 and later
- Apple macOS 10.14 and later
- Written in JavaScript

## Dependencies

- For building: Visual Studio (NOT Code) 2019
- Node.js
- Node package manager (NPM)
- The following npm packages (also found in the package.json file, along with the right version numbers)
  + `@babel/cli`
  + `@babel/core`
  + `@babel/plugin-proposal-class-properties`
  + `@babel/plugin-transform-arrow-functions`
  + `@babel/preset-env`
  + `@babel/preset-react`
  + `@babel/preset-typescript`
  + `@types/react`
  + `@types/react-dom`
  + `babel`
  + `babel-loader`
  + `electron`
  + `electron-cgi`
  + `electron-packager`
  + `html-webpack-plugin`
  + `prettier`
  + `react`
  + `react-dom`
  + `tslint`
  + `typescript`
  + `webpack`
  + `webpack-cli`

## To Install

No installer is provided. Because this project is still in its infancy, it has no official documentation.

## To Use this Repository

To clone and run this repository, you'll need Git, Visual Studio (not Code, get Community instead) 2019, Node.js and npm installed on your computer.

From your command line:

```
# Clone this repository
git clone https://github.com/mvwater/mvwater-electron.git
```

Open the `.sln` file in your local version, which should open Visual Studio. If not, please check your default file associations.
