export async function fetcher(url, option = {}) {
  let response;
  if (!response) {
    response = await fetch(url);
  } else {
    response = await fetch(url, option);
  }

  const data = await response.json();

  return data;
}

export function dataProcess(data) {
  const dataProcessed = data.map((item) => {
    let id = item.id;
    let imageUrl = `http://localhost:1337${item.attributes.imagem.data[0].attributes.url}`;

    return { id, imageUrl, ...item.attributes };
  });

  return dataProcessed;
}

export const selectItems = (response, slug) => {
  const items = response.data.filter((item) => {
    const category = item.attributes.categorias.data.find(
      (cat) => cat.attributes.slug === slug
    );
    return category !== undefined;
  });

  return items;
};

export const processObjectItem = (response) => {
  const data = response.data.attributes;

  const image = data.imagem.data[0].attributes.url;

  const processedObject = {
    id: response.data.id,
    name: data.nome,
    description: data.descricao,
    price: data.preco.replace(/\./g, ","),
    imagem: `http://localhost:1337${image}`,
  };

  return processedObject;
};
