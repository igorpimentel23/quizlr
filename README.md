# Quizlr

React-native application using Expo's managed workflow

## Starting

This project involves developing a "Home" screen of an educational TikTok clone using a cross-platform app development framework, React Native with TypeScript. The test simulates the implementation of a typical mobile app screen and primarily focuses on showcasing the content of the "Following" and "For You" sections. This content encompasses two kinds: Flashcards and Multiple Choice Questions (MCQs), all featuring user name, user icon, and content description details.

Key tasks include infinite scroll content browsing, similar to TikTok's interface, and a countdown timer at the top left to measure the user's app usage time. It's important to note that the state changes won't be persisted to an API, and features like Like, Comment, Share, Bookmark buttons, User Profile, Search, or Playlist are not in the scope of this project. Furthermore, other sections of the app (Discover, Activity, Bookmarks, Profile) are also excluded.

The following API endpoints will be utilized:

"Following" section: GET https://cross-platform.rp.devfactory.com/following
"For you" section: GET https://cross-platform.rp.devfactory.com/for_you
Reveal answer: GET https://cross-platform.rp.devfactory.com/reveal?id=X
The ultimate goal is to implement the Home screen adhering to industry best practices and maintaining high-quality standards as prescribed.

You can checkout the app [here](https://expo.dev/@igortpimentel/quizlr)

### Prerequisites

For the project installation, Yarn must be installed on the machine.

[Yarn](https://classic.yarnpkg.com/en/docs/install/)

The react-native environment should be configured

[Environment setup](https://reactnative.dev/docs/environment-setup)

### Installing

After cloning and downloading the project, run:

```
yarn
```

Run:
```
cp .env.example .env
```

To start the project on the iOS emulator, run:

```
yarn ios
```

To start the project on the Android emulator, run:

```
yarn android
```

## Authors

* **Igor Pimentel** - *Initial work* - [igorpimentel23](https://github.com/igorpimentel23)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
