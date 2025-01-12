```javascript
// app/middleware.js

export function middleware(req) {
  // Properly handle request and route matching
  console.log('Middleware executed:', req.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:path*'], // Adjust as needed
};

// app/page.js

export default function Page() {
  return (
    <div>Hello from page</div>
  );
}
```