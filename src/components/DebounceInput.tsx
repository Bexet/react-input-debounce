import { useState, useEffect, ChangeEvent, InputHTMLAttributes } from "react";
import { useDebounce } from 'use-debounce';

export interface DebounceInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  debounceTimeout?: number;
}

export function DebounceInput({ debounceTimeout = 100, onChange, value, ...rest }: DebounceInputProps) {
  const [changeEvent, setChangeEvent] = useState<ChangeEvent<HTMLInputElement>>();
  const [debouncedEvent] = useDebounce(changeEvent, debounceTimeout);

  useEffect(() => {
    if (debouncedEvent) {
      onChange?.(debouncedEvent!);
    }
  }, [debouncedEvent]);

  return (
    <input
      {...rest}
      value={changeEvent ? changeEvent.target.value : (value || "")}
      onChange={setChangeEvent}
    />
  );
}
