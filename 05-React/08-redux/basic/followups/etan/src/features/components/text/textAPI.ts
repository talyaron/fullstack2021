// A mock function to mimic making an async request for data
export function fetchGivenText(givenText = '') {
    return new Promise<{data: string}>((resolve) => setTimeout(() => resolve({data: givenText}), 500));
}
