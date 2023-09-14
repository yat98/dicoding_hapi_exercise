const hello = (req) => {
  const { name = 'stranger' } = req.params;
  const { lang } = req.query;
  if (lang === 'id') {
    return `Hai, ${name}!`;
  }
  return `Hello, ${name}!`;
};

export default {
  hello,
};
