// Map language codes to numeric Ids, refer to Wowhead locale Ids
export const getLangId = (code: string): number => {
    switch(code) {
        case 'ko': return 1;
        case 'fr': return 2;
        case 'de': return 3;
        case 'cn': return 4;
        case 'es': return 6;
        case 'ru': return 7;
        case 'pt': return 8;
        case 'it': return 9;
        case 'tw': return 10;
        case 'mx': return 11;
        default: return 0;
    };
};