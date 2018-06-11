export const selectLibrary = (libraryId) => {

    // Action creator for select a library from the list
    return {
        type: 'select_library',
        payload: libraryId
    };
};