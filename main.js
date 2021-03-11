// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const isAdmin = obj => obj.userRole === 'ADMIN' 

const getEmail = obj => `${obj.firstName.toLowerCase()}.${obj.lastName.toLowerCase()}@codeimmersives.com`

const getPlaylistLength = obj => obj.songs.length

const getHardestHomework = objects => {
    if (objects.averageScore === undefined) return '';
    
    let lowestScore = objects[0].averageScore;
    
    let hwName = '';
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].averageScore < lowestScore) {
            lowestScore = objects[i].averageScore;
            hwName = objects[i].name
        }
    }
    return hwName;
}

const createPhonebook = (keys, values) => {   
    let phoneBook = {};

    for (let i = 0; i < keys.length; i++){       
        phoneBook[keys[i]] = values[i];
    }
    return phoneBook
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};