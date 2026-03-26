export function requireStr(varName: string, str: string): string {
    if (!str) {
        throw Error(`Error - expected ${varName} but found ${str}`);
    }
    return str;
}

export function requireNumber(varName: string, str: string): number {
    if (!str) {
        throw Error(`Error - expected ${varName} to exist but found ${str}`);
    }
    const num: number = Number.parseInt(str);
    if (Number.isNaN(num)) {
        throw Error(`Error - expected num from ${varName} but got ${NaN}`);
    }
    return num;
}
