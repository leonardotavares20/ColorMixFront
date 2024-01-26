export const normalizeSearchTerm = (searchTerm) => {
  return searchTerm
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace("-", " ");
};

export const processSearchTerms = (replacedTerm) => {
  const normalizeTerm = replacedTerm.split(" ").map((term) => {
    if (term.endsWith("oes")) {
      return term.replace("oes", "ao");
    }

    if (term.endsWith("as") || term.endsWith("es") || term.endsWith("os")) {
      return term.slice(0, -1);
    }

    return term;
  });

  return normalizeTerm;
};

export const filterItemsSearch = (response, searchTerms) => {
  const filteredItems = response.filter((item) => {
    return searchTerms.every((term) => {
      const regex = new RegExp(term, "i");
      return regex.test(
        item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
    });
  });

  return filteredItems;
};

export const formatterBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});
