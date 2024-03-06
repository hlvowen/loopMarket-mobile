async function placeAnOffer(data = {}) {
  // Les options par défaut sont indiquées par *
  const response = await fetch(
    "https://preprod-loopmarket.gondwanna.eu/negociation",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }
  );

  return response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
}

async function updateStatus(id, data = {}) {
  // Les options par défaut sont indiquées par *
  const response = await fetch(
    `https://preprod-loopmarket.gondwanna.eu/update-negociation-status/${id}`,
    {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }
  );

  return response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
}

async function getAllOfferBySellerId(id) {
  const reponse = await fetch(
    `https://preprod-loopmarket.gondwanna.eu/get-negociation-vendeur/${id}`
  );
  const negociations = await reponse.json();
  return negociations;
}

async function getAllOfferByBuyerId(id) {
  const reponse = await fetch(
    `https://preprod-loopmarket.gondwanna.eu/get-negociation-acheteur/${id}`
  );
  const negociations = await reponse.json();
  return negociations;
}

async function getAllOfferByBuyerIdAndStatus(id, status) {
  const reponse = await fetch(
    `https://preprod-loopmarket.gondwanna.eu/get-negociation-acheteur-status/${id}/${status}`
  );
  const negociations = await reponse.json();
  return negociations;
}

export {
  placeAnOffer,
  getAllOfferBySellerId,
  getAllOfferByBuyerId,
  getAllOfferByBuyerIdAndStatus,
  updateStatus,
};
