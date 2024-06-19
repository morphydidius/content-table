const hoursPerDay = 24;

const generateCollOfNums = num => {
	return new Array(num).fill().map((el,i) => i + 1);
};

const generateDaysInMonth = () => {
	return generateCollOfNums(getDaysInMonth(2024, 6));
};

const generateHours = () => {
	return generateCollOfNums(hoursPerDay);
};

const getDaysInMonth = (year, month) => {
	return new Date(year, month, 0).getDate();
};

const getMatrixCollByCoords = (x, y) => {
	const xColl = generateCollOfNums(x);
	const yColl = generateCollOfNums(y);

	return xColl.reduce((accum, xElem, xIndex) => {
		yColl.forEach((yElem, yIndex) => {
			accum.push({ x: xIndex + 1, y: yIndex + 1 });
		});

		return accum;
	}, []);
};

const getSlotNamesFromCoords = coll => {
	return coll.map(({ x, y }) => `cell${x}-${y}`);
};

const getValidatedValue = (value) => {
	const numbersValue = value.replace(/\D/g, '');

	return numbersValue.length > 6
		? numbersValue.slice(0, numbersValue.length - 1)
		: numbersValue;
};

export {
	generateHours,
	generateDaysInMonth,
	getMatrixCollByCoords,
	getSlotNamesFromCoords,
	getValidatedValue,
	getDaysInMonth,
};
