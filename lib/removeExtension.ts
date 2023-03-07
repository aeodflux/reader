export const removeExtension = (str: string) => {
    return str.substring(0, str.lastIndexOf('.')) || str;
}