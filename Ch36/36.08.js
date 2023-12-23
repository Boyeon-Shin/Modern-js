function parseURL(url = '' ) {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);

    if(!parsedURL)return {};
    const [, protocol, host, path] = parsedURL;
    return {protocol, host, path};
}

const parsedURL = parseURL('http://developer.mozilla.org/ko/Web/JavaScript');
console.log(parsedURL);
