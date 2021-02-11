import { createSelector } from 'reselect';
import memoize from 'lodash.memoize'

// we want our routes to display collection name as a string, but the data is structured to have number ids
// the above comment referenced a map, which we took out, because we normalized our data to be a hash map rather than an array

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = memoize((collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
))

// using outside library here because our standard flow doesn't work when our selector need
// an argument
// what this memoize is saying is ** whenever we call this function and receive the urlParam
// memoize the return (cache it). If the function gets called again with same urlParam
// then don't rerun the function because it will give same value as last time
