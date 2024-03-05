async function getUserById(id) {
  const reponse = await fetch(`http://localhost:8000/utilisateurs/${id}`);
  const user = await reponse.json();
  return user;
}

export { getUserById };
