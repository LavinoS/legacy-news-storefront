export default (entities, category, from, to) => {
  return entities
    .filter(
      (entity) => entity.category === category && entity.status === 'published',
    )
    .sort((a, b) => {
      const dateA = a.publishDate.split('-').reverse().join('-');
      const dateB = b.publishDate.split('-').reverse().join('-');
      return new Date(dateB) - new Date(dateA);
    })
    .slice(from, to);
};
