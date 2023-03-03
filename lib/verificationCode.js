const getVerificationCode = (email) => {
    return appendIntToInt(hashFromString(email), hashFromString(new Date().getTime().toString()))
}

const hashFromString = (str) => {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // convert to 32 bit integer
    }
    return hash;
}

const appendIntToInt = (int1, int2) => {
    return parseInt(int1.toString() + int2.toString());
}

export default getVerificationCode