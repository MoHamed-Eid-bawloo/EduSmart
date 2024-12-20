import React from 'react';

export default function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you're looking for.</p>
      <p>Please try again later or go back to the <a href="/">home page</a>.</p>
    </div>
  );
}
