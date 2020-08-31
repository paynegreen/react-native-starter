![Test](https://github.com/paynegreen/react-native-starter/workflows/Test/badge.svg)

# React Native Starter Kit (wip)
A quick boilerplate setup for building RN apps using Typescript.

## Instructions
- Run on iOS
```yarn ios```

- Run on Android
```yarn android```

**Note:** Use ```react-native-rename``` to rename the project to the preferred name. [react-native-rename docs](https://github.com/junedomingo/react-native-rename). Don't forget to effect the changes in ```android/app/src/androidTest/java/com/startup/DetoxTest.java``` for the e2e tests on android to run smoothly.

## Testing
Strategy here is e2e -> unit testing -> component testing. e2e gives confidences as our users will be interacting with the application the way it was designed (ideally).

- Run iOS e2e debug
```yarn e2e:ios```
- Run iOS e2e release
```yarn e2e:ios-release```

- Run Android e2e debug
```yarn e2e:android```
- Run Android e2e release
```yarn e2e:android-release```

## CI (GitHub Actions)
Your workflow run will be visible in the Actions tab of your GitHub repository.
[GitHub Actions - Configuring a workflow](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)

## Libraries Included
- react-navigation
- react-native-screens
- react-native-app-intro-slider
- react-native-gesture-handler
- react-native-reanimated
- react-native-safe-area-context
- mobx
- mobx-react
- mobx-state-tree
- axios
- react-native-make
- detox

## Set Icon & Splash Screen
For Icons:
`react-native set-icon --path path-to-image`

For SplashScreen: 
[Refer to react-native-bootsplash readme](https://github.com/zoontek/react-native-bootsplash)

***Follow the guide on the readme***

## Acknowledgements
- Infrared - (RN + Mobx)
