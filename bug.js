```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
This code works perfectly fine in Next.js 13, but in Next.js 15, it throws an error: `Error: Invalid hook call. Hooks can only be called inside of the body of a function component.` This happens even if the component is a function component and not a class component.