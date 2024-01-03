import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#2e4438',
  },

  components: {
    Input: {
      inputStyle: {paddingHorizontal: 16},
      inputContainerStyle: {
        backgroundColor: 'rgba(0, 0, 0, .05)',
        borderColor: 'transparent',
        height: 56,
        borderRadius: 28 / 2,
      },
      labelStyle: {fontSize: 16, paddingBottom: 8},
    },
    Button: {
      titleStyle: {fontSize: 16, fontWeight: 'bold'},
      buttonStyle: {borderRadius: 28 / 2, height: 56},
    },
  },
  mode: 'light',
});

export default theme;
