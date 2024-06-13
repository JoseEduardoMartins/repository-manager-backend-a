const getSelect = (select: Array<string>): object => {
  const object = select.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});

  return object;
};

export const getParams = (query: any) => {
  const params = {
    select: undefined,
    where: undefined,
  };

  if (query?.select) {
    const { select, ...where } = query;
    params.select = getSelect(select);
    params.where = where;
  } else {
    params.where = query;
  }

  return params;
};
