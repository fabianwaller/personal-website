const addDaysToTimestamp = (timestamp, days) => {
    return timestamp + (days * 24 * 60 * 60 * 1000);
}

export default addDaysToTimestamp