export const name = "uhyo";
export const age = 26;

export const getUhyoName = () => {
  return "UHYO";
};

export function getAhyoName() {
  return "AHYO";
};

type Animal = {
  species: string;
  age: number;
};

const tama: Animal = {
  species: "Felis silvestris catus",
  age: 1
};

export { Animal,  tama };
