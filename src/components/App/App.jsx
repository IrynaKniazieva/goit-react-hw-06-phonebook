import { BrowserRouter } from 'react-router-dom';

import ContactsBook from 'components/ContactsBook/ContactsBook';

const App = () => {
  return (
    <BrowserRouter>
      <ContactsBook/>
    </BrowserRouter>
  );
};

export default App;
