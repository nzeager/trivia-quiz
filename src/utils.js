// Fixes ' in text output
// credit: Wladimir Palant - https://stackoverflow.com/a/34064434
export const htmlDecode = input => new DOMParser()
    .parseFromString(input, "text/html")
    .documentElement.textContent