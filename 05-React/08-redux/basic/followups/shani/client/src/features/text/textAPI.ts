// A mock function to mimic making an async request for data
export function fetchText(theText = '') {
    return new Promise<{ data: string }>((resolve) =>
      setTimeout(() => resolve({ data: theText}), 500)
    );
  }