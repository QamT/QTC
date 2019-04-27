export const getNode = string => new DOMParser().parseFromString(string, 'text/html').body.firstChild;


// TODO: add sanitizer
// TODO: add throttling function