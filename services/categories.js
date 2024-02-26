export const fetchCategories = async () => {
  const client = createClient();
  const categories = await client.query(
    prismic.Predicates.at('document.type', 'categories') // Assuming 'category' is the custom type for categories
  );
  return categories.results;
};
