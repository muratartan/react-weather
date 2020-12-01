export const updateObject = (oldObject, updatedProperties) => {
    return{
        ...oldObject,
        ...updatedProperties
    };
};

export const changeFavStarHandler = (favorites, currentLocation) => {
    return favorites.includes(currentLocation);
}