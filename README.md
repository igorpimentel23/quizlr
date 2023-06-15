# Quizlr
React-Native application using Expo's managed workflow to simulate an educational TikTok clone.

## Table of Contents
1. [Project Description](#project-description)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Demo](#demo)
8. [Authors](#authors)
9. [License](#license)

## Project Description
Quizlr is a cross-platform application that simulates the implementation of the "Home" screen of an educational TikTok clone. The application showcases the content of the "Following" and "For You" sections, featuring Flashcards and Multiple Choice Questions (MCQs). Users can browse content in an infinite scroll fashion, and a countdown timer measures the app usage time. (Expand on this section using your existing content)

## Tech Stack
- React Native
- TypeScript
- Expo (managed workflow)
- [Native Base](https://nativebase.io/)
- [Styled Components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)

## Prerequisites
For the project installation, Yarn must be installed on the machine.

[Yarn](https://classic.yarnpkg.com/en/docs/install/)

The react-native environment should be configured

[Environment setup](https://reactnative.dev/docs/environment-setup)

## Installation
After cloning and downloading the project, run:

```
yarn
```

Run:
```
cp .env.example .env
```

## Usage

To start the project on the iOS emulator, run:

```
yarn ios
```

To start the project on the Android emulator, run:

```
yarn android
```

## API Endpoints

|Section | Method|URL|
|--|--|--|
|Following |GET |https://cross-platform.rp.devfactory.com/following|
|For You |GET |https://cross-platform.rp.devfactory.com/for_you|
|Reveal Answer |GET |https://cross-platform.rp.devfactory.com/reveal?id=X|

## Demo
<img src="https://github.com/igorpimentel23/quizlr/assets/72712137/8a49d698-d0cd-457d-a0b1-b29c2d20b4c9" alt="screenshot-1" width="200" />
<img src="https://github.com/igorpimentel23/quizlr/assets/72712137/2f763758-7522-48b2-b699-4a49ca631642" alt="screenshot-2" width="200" />
<img src="https://github.com/igorpimentel23/quizlr/assets/72712137/bd2a269d-50ed-4d47-ac50-7e4ef344dcdc" alt="screenshot-3" width="200" />
<img src="https://github.com/igorpimentel23/quizlr/assets/72712137/46f8ef80-cb0c-4a2f-b4b2-8088501d231c" alt="screenshot-4" width="200" />

## Authors

* **Igor Pimentel** - *Initial work* - [igorpimentel23](https://github.com/igorpimentel23)

## License

This project is licensed under the MIT License - see the [license.md](license.md) file for details

