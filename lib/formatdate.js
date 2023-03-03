const formatDate = (date) => {
    return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
}

const formatDateComplete = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    //var ampm = hours >= 12 ? 'pm' : 'am';
    //hours = hours % 12;
    //hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' '; //+ ampm;
    return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + strTime;
}

export default formatDate