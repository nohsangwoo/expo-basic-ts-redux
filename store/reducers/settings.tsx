const SET_THEME_MODE = 'SET_THEME_MODE';

export const setThemeMode = (setThemeMode: string) => {
  return { type: SET_THEME_MODE, setThemeMode };
};

type initState = {
  isDarkMode: Boolean;
};

const initialState: initState = { isDarkMode: true };

export default function Settings(state = initialState, action: any) {
  console.log('action check: ', action);
  switch (action.type) {
    case SET_THEME_MODE:
      return { ...state, themeMode: action.themeMode };
    default:
      return state;
  }
}
