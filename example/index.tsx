import { ChangeEvent, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { DebounceInput } from "@/index";
import './index.css';

console.log(DebounceInput);

interface Value {
  value: string;
  timeout: number;
}

function App() {
  const [timeout, setTimeout] = useState(500);
  const [values, setValues] = useState<Value[]>([]);

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setValues(arr => [{ value: target.value, timeout }, ...arr]);
    target.value = '';
  }

  return <main>
    <h1>Input debounce example</h1>
    <div>
      <label htmlFor='timeout'>Timeout:</label>
      <input name='timeout' type="number" value={timeout || ''}
        onChange={({ target: { value } }) => setTimeout(Number(value))} />
    </div>
    <div>
      <label htmlFor='debounced'>Debounced value:</label>
      <DebounceInput debounceTimeout={timeout} name='debounced'
        onChange={handleChange} />
    </div>
    <ul>
      {values.map(({ value, timeout}, i) => <li key={i}>
        <span>New value: {value} (after {timeout}ms)</span>
      </li>)}
    </ul>
  </main>;
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
