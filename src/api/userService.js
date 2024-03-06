async function getUserById(id) {
  const reponse = await fetch(
    `https://preprod-loopmarket.gondwanna.eu/utilisateurs/${id}`
  );
  const user = await reponse.json();
  return user;
}

export { getUserById };
