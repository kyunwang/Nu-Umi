const getRandomItemFromArr = arr => {
	const randomInt = Math.floor(Math.random() * arr.length);
	const randomItem = arr[randomInt];
	return randomItem;
};

export { getRandomItemFromArr };
