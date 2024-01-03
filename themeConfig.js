import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#2e4438',
  },

  components: {
    Input: {
      inputStyle: {fontFamily: 'BodyText', paddingHorizontal: 8},
      inputContainerStyle: {
        backgroundColor: 'rgba(0, 0, 0, .025)',
        height: 56,
      },
      labelStyle: {fontSize: 16, paddingBottom: 8},
    },
    Button: {
      titleStyle: {fontSize: 16, fontWeight: 'bold'},
      buttonStyle: {borderRadius: 28, height: 56},
    },
  },
  mode: 'light',
});

export default theme;
