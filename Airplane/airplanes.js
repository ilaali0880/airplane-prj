const randomDate = () => {
	const start = new Date(2021, 0, 1);
	const end = new Date();
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime()),
	);
};

const data = [
	{
		id: 1,
		name: "Hawker Hurricane",
		trips: [
			{
				date: randomDate(),
				origin: "mashhad",
				destination: "kerman",
			},
			{
				date: randomDate(),
				origin: "tehran",
				destination: "abadan",
			},

		],
	},
	{
		id: 2,
		name: "U-2 spy plane",
		trips: [
			{
				date: randomDate(),
				origin: "zahedan",
				destination: "kordestan",
			},
			{
				date: randomDate(),
				origin: "iran",
				destination: "france",
			},
			{
				date: randomDate(),
				origin: "esfahan",
				destination: "yazd",
			},

		],
	},
	{
		id: 3,
		name: "Tupolev Tu-95 ",
		trips: [
			{
				date: randomDate(),
				origin: "yazd",
				destination: "shahrood",
			},
			{
				date: randomDate(),
				origin: "semnan",
				destination: "karaj",
			},
			{
				date: randomDate(),
				origin: "iran",
				destination: "germany",
			},

		],
	},
	{
		id: 4,
		name: "Amadea",
		trips: [
			{
				date: randomDate(),
				origin: "iran",
				destination: "iraq",
			},
			{
				date: randomDate(),
				origin: "tehran",
				destination: "yazd",
			},
			{
				date: randomDate(),
				origin: "kerman",
				destination: "ilam",
			},
		],
	},
	{
		id: 5,
		name: "Ambience",
		trips: [
			{
				date: randomDate(),
				origin: "iran",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "iraq",
			},
			{
				date: randomDate(),
				origin: "qom",
				destination: "yasooj",
			},

		],
	},
	{
		id: 6,
		name: "Arcadia",
		trips: [
			{
				date: randomDate(),
				origin: "netherland",
				destination: "austorlia",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "iraq",
				destination: "germany",
			},


		],
	},
];
export default data;
