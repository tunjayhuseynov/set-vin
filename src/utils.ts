
export const DecodeBase64 = (content: string) => {
    return decodeURIComponent(atob(content).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''))
}