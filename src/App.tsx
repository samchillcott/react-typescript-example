import { FC, useState } from 'react';
import './App.css';
import SignIn from './SignIn';

interface AppProps {
  sendSearchQuery?(): void
}

const App: FC<AppProps> = ({sendSearchQuery = () => undefined}) => {
  const [searchValue, setSearchValue] = useState<string>()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const onClickHandler = () => {
    sendSearchQuery()
  }

  const SimpleSignIn = (
    <>
      <input
        name="search"
        type="text"
        onChange={onChangeHandler}
        value={searchValue}
      />
      <button onClick={onClickHandler}>Search</button>
    </>
  );

  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default App;
