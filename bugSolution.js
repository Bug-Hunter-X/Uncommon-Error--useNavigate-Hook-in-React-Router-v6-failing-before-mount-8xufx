The solution involves checking if the `navigate` function is available before attempting to use it. This can be done with a simple conditional check within the `useEffect` hook:

```javascript
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function MyComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigate) { // Check if navigate is available
      navigate('/dashboard');
    }
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div>
      {/* ... */}
    </div>
  );
}
```

Alternatively, you could use a `setTimeout` to introduce a delay to ensure that the hook is fully initialised. However, this is a less reliable method as the appropriate delay time can vary.

```javascript
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function MyComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/dashboard');
    }, 0); // Small delay to ensure that the navigate hook is initialized
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div>
      {/* ... */}
    </div>
  );
}
```
By incorporating this check, the redirection will only occur once the `useNavigate` hook is properly initialized, preventing the error.