export const sum = (a: number, b: number) => {
	return (a + b) * 2;
};
const result = sum(2 as number, 3 as number);

export const minus = (a: number, b: number) => {
	return a - b;
};

module.exports = minus;
