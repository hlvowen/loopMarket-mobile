const getPosts = async (limit) => {
  const response = await fetch(
    `http://localhost:8500/api/annonces-disponibles/${limit}`
  );

  const data = await response.json();

  return data;
};

const getPostById = async (id) => {
  let response = await fetch(
    "http://localhost:8500/api/annonces-disponibles/10"
  );

  return response.json();
};

export { getPosts, getPostById };
