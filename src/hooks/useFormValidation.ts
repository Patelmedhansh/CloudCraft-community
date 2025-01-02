import { useState } from 'react';

interface ValidationRules {
  [key: string]: (value: any) => string | undefined;
}

export function useFormValidation<T extends object>(initialState: T, rules: ValidationRules) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    Object.keys(rules).forEach(key => {
      const error = rules[key](values[key as keyof T]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, setValues, errors, validate };
}