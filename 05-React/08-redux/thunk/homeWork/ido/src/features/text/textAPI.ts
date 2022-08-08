// A mock function to mimic making an async request for data
export function fetchText(text ="") {
    return new Promise<{ data: string }>((resolve) =>
      setTimeout(() => resolve({ data: text }), 500)
    );
  }
  