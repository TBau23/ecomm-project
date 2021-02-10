import { createSelector } from 'reselect';

const selectDirectory = state => state.directory; // returns slice of state

export const selectDirectorySections = createSelector(
    [selectDirectory], // selects specific portion of slice of state
    directory => directory.sections
)