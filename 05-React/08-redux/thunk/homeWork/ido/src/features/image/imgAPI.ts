export function fetchImg(img = " ") {
    return new Promise<{ data: string }>((resolve) =>
      setTimeout(() => resolve({ data: img }), 500)
    );
  }
  