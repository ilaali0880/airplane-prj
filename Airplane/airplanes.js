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
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
		],
	},
	{
		id: 2,
		name: "U-2 spy plane",
		trips: [
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
		],
	},
	{
		id: 3,
		name: "Tupolev Tu-95 ",
		trips: [
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},{
				date: randomDate(),
				origin: "france",
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
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
		],
	},
	{
		id: 5,
		name: "Ambience",
		trips: [
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
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
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
			{
				date: randomDate(),
				origin: "france",
				destination: "germany",
			},
		],
	},
];
export default data;
