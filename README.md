# react input debounce [![npm version](https://img.shields.io/npm/v/react-input-debounce)](https://www.npmjs.com/package/react-input-debounce) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/Bexet/react-input-debounce)](https://github.com/Bexet/react-input-debounce)

Version 1.0.6

`react input debounce` provides a simple and efficient React component to debounce the `onChange` event of a standard HTML input element. This prevents excessive re-renders or API calls while a user is actively typing, improving performance and user experience.

## ✨ Features

*   **Debounced `onChange` Event**: Automatically debounces the `onChange` event of an input field, triggering your handler only after a specified delay.
*   **Configurable Debounce Timeout**: Easily customize the debounce delay using the `debounceTimeout` prop.
*   **Standard Input Compatibility**: Supports all standard HTML `<input>` attributes and props.
*   **TypeScript Support**: Built with TypeScript for a robust and type-safe development experience.

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install react-input-debounce

# or
yarn add react-input-debounce
```

## 🚀 Usage

Integrate `DebounceInput` into your React components just like a regular `<input>` element. Provide an `onChange` handler and an optional `debounceTimeout` (defaults to `100ms`).

```typescript
import React, { ChangeEvent, useState } from 'react';
import { DebounceInput, DebounceInputProps } from 'react-input-debounce';

function MyDebouncedForm() {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [timeout, setTimeout] = useState(500);

  // This handler receives the *debounced* change event
  const handleDebouncedChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Debounced value:', event.target.value);
    setDebouncedSearchValue(event.target.value);
    // You would typically perform an API call or expensive operation here
  };

  // This handler receives the *immediate* change event for display purposes
  const handleImmediateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <h1>Search with Debounce</h1>
      <div>
        <label htmlFor="debounce-timeout">Debounce Timeout (ms): </label>
        <input
          id="debounce-timeout"
          type="number"
          value={timeout}
          onChange={(e) => setTimeout(Number(e.target.value))}
          style={{ marginBottom: '15px' }}
        />
      </div>

      <label htmlFor="search-input">Search Term:</label>
      <DebounceInput
        id="search-input"
        type="text"
        placeholder="Type to search..."
        debounceTimeout={timeout} // Dynamic timeout example
        onChange={handleDebouncedChange}
        // All other standard input props are passed through
        className="my-custom-input"
        style={{ width: '300px', padding: '8px' }}
      />
      
      <p>Immediate input value: **{searchValue}**</p>
      <p>Debounced search value: **{debouncedSearchValue}**</p>
    </div>
  );
}

export default MyDebouncedForm;
```

### Props

The `DebounceInput` component accepts all standard `InputHTMLAttributes<HTMLInputElement>` in addition to the following specific prop:

| Prop              | Type     | Default | Description                                             |
| :---------------- | :------- | :------ | :------------------------------------------------------ |
| `debounceTimeout` | `number` | `100`   | The delay in milliseconds before the `onChange` event is fired. |

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests on the [GitHub repository](https://github.com/Bexet/react-input-debounce).

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
