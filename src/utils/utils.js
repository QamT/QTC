const replaceSpace = string => string.replace(/ /, '');

export const getNode = string => new DOMParser().parseFromString(replaceSpace(string), 'text/html').body.firstChild;


// TODO: add sanitizer
// TODO: add throttling function