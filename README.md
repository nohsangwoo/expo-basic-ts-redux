# expo, typescript, styled-components, redux, react navigation

# init setting up

https://docs.expo.io/guides/typescript/

- install redux, redux-saga, redux-thunk
  import { Provider } from 'react-redux';
  redux-logger, react-redux, react-redux

npm install @react-navigation/native

- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

@react-navigation/stack

# App loading...

- https://docs.expo.io/versions/latest/sdk/app-loading/
- expo install expo-app-loading
  expo install expo-font

# styled-components

- styled-components

# redux things

- @react-native-async-storage/async-storage
  <!-- for react native redux async storage -->
- apply redux thunk
- apply persist

# nav 디렉토리 변경 stack => tab > stack

# src로 디렉토리 합치키 진행 예정

# tabNav 적용

https://reactnavigation.org/docs/bottom-tab-navigator

- npm install @react-navigation/bottom-tabs

# darkModeSetting

- 총괄 레이아웃을 하나만들고 그안에 props.theme에서 값을 가져옴
- 이때 settings.themeMode을 조건에따라 dark mode 또는 light mode로 지정해준다
- global styled 적용하는법 (일단 styled components로는 안됨)
- 점진적으로 tsx 적용

# icon

https://icons.expo.fyi/
