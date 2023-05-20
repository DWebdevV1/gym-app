function capitalizeFirst(str: string): string {
    return str && str?.length ?
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;
}

function textShorterByLength(text: string, maxLength: number): string {
    return text?.length + 3 > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

export { capitalizeFirst, textShorterByLength };