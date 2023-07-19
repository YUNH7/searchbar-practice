import SearchBox from './components/SearchBox';
import GlobalStyle from './styles/GlobalStyle';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <GlobalStyle />
      <SearchBox />
    </StyleSheetManager>
  );
}

export default App;
