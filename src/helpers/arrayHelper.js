export function getObjectById(array,object_id) {
    let lookup = {};
    for (let i = 0, len = array.length; i < len; i++) {
        lookup[array[i].id] = array[i];
    }

    return lookup[object_id];
}

export function getObjectByTag( array,tag_name ) {
    let lookup = {};
    for (let i = 0, len = array.length; i < len; i++) {
        lookup[array[i].title] = array[i];
    }

    return lookup[tag_name];
}

export function getObjectByExamId(array,object_id) {
    let lookup = {};
    for (let i = 0, len = array.length; i < len; i++) {
        lookup[array[i].examId] = array[i];
    }

    return lookup[object_id];
}

export function getObjectInArrayPosition(array,object_id) {
    for (let i = 0; i < array.length; i++) {
        if(array[i].id === object_id) {
            return i;
        }
    }
}

export function getDataPositionInArray(array,value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
}

export function switchArrayPosition(arr, indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr;
}