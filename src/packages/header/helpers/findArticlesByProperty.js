export default (collection, searchedProperty = 'fashion') => {
  return collection
    .filter((article) => article.category === searchedProperty)
    .sort(
      (first, second) =>
        new Date(second.publishDate) - new Date(first.publishDate),
    )
    .slice(0, 4);
};
