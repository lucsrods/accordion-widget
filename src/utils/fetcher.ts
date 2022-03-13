export default async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');

    throw {
      ...error,
      info: await res.json(),
      status: res.status
    };
  }

  return res.json();
};