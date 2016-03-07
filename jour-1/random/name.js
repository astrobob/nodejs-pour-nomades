var nameList = [
	'Jon',
	'Albert',
	'Gaston',
	'Julien',
	'Francis',
	'Hector',
	'Baptiste',
	'Jeanne',
	'Christine',
	'Corinne',
	'Anne',
	'Gertrude',
	'Colette',
	'Marie'
];

module.exports.getRandomName = function() {
	var rand = Math.ceil(Math.random() * 14 - 1);
	console.log(rand)
	return nameList[rand];
};