import { FC, useState } from 'react';
import './App.css';

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

  return (
    <div className="App">
      <input
        name="search"
        type="text"
        onChange={onChangeHandler}
        value={searchValue}
      />
      <button
        onClick={onClickHandler}
      >Search
      </button>
    </div>
  );
}

export default App;
