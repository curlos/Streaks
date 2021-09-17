const defaultTasks = () => {
  return {
		'JncEkcxfLgyihDrtblrKM': {
			id: 'JncEkcxfLgyihDrtblrKM',
			title: "Eat a Healthy Meal",
			icon: "fas fa-carrot",
			color: {
				type: "custom",
				color: "#1caeb0",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#1caeb0" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 3,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {
				'2021-09-01': 'Wed Sep 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)',
				'2021-09-02':'Thu Sep 02 2021 00:00:00 GMT-0400 (Eastern Daylight Time)' ,
				'2021-09-03': 'Fri Sep 03 2021 00:00:00 GMT-0400 (Eastern Daylight Time)',
			},
			missedDays: {
				'2021-09-04': 'Sat Sep 4 2021 00:00:00 GMT-0400 (Eastern Daylight Time)'
			},
			longestStreak: {
				num: 3,
				from: '2021-09-15',
				to: '2021-09-17'
			},
			currentStreak: {
				num: 3,
				from: '2021-09-15',
				to: '2021-09-17'
			},
			completed: false,
		},
		'RAlxPGAdo5AS09JbUN0b2': {
			id: 'RAlxPGAdo5AS09JbUN0b2',
			title: "Do Your Homework",
			icon: "fas fa-highlighter",
			color: {
				type: "automatic",
				color: "#F58220",
				taskColorTypes: {
					automatic: { checked: true, color: "#F58220" },
					customColor: { checked: false, color: "#F58220" },
				},
			},
			measurementDuration: { type: "weekly", iconName: "calendar-week" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 1,
			},
			weekly: {
				startWeekOn: {
					sunday: false,
					monday: true,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 2,
			},
			monthly: { frequency: 1 },
			completedDays: {},
			missedDays: {},
			longestStreak: 0,
			currentStreak: 67,
			completed: false,
		},
		'Pj_eRQsl1EkNDqMFrBI1R': {
			id: 'Pj_eRQsl1EkNDqMFrBI1R',
			title: "Pray to god",
			icon: "fas fa-star-and-crescent",
			color: {
				type: "custom",
				color: "#344fb2",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#344fb2" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 1,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {},
			missedDays: {},
			longestStreak: 61,
			currentStreak: 57,
			completed: false,
		},
		'5bDfPLMOj0dSYX9ILVJx_': {
			id: '5bDfPLMOj0dSYX9ILVJx_',
			title: "Go to church",
			icon: "fas fa-bible",
			color: {
				type: "custom",
				color: "#344fb2",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#344fb2" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 1,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {},
			missedDays: {},
			longestStreak: 72,
			currentStreak: 72,
			completed: false,
		},
		'SSthDhIVQmnR_ZoQPw2rM': {
			id: 'SSthDhIVQmnR_ZoQPw2rM',
			title: "Walk the Dog",
			icon: "fas fa-carrot",
			color: {
				type: "custom",
				color: "#e12323",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#e12323" },
				},
			},
			measurementDuration: { type: "monthly", iconName: "calendar" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 2,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 4,
			},
			monthly: { frequency: 19 },
			completedDays: {},
			missedDays: {},
			longestStreak: 129,
			currentStreak: 69,
			completed: false,
		},
		'hg-k_erON5nDnf4-ixXoa': {
			id: 'hg-k_erON5nDnf4-ixXoa',
			title: "Take Vitamins",
			icon: "fas fa-capsules",
			color: {
				type: "custom",
				color: "#6cc94a",
				taskColorTypes: {
					automatic: { checked: false, color: "#F58220" },
					customColor: { checked: true, color: "#6cc94a" },
				},
			},
			measurementDuration: { type: "daily", iconName: "calendar-day" },
			daily: {
				specificDaysOfWeek: {
					checked: true,
					days: {
						sunday: true,
						monday: true,
						tuesday: true,
						wednesday: true,
						thursday: true,
						friday: true,
						saturday: true,
					},
				},
				numOfDaysPerWeek: { checked: false, frequency: 7 },
				numOfDaysPerFortnight: { checked: false, frequency: 7 },
				numOfDaysPerMonth: { checked: false, frequency: 7 },
				everyXDays: { checked: false, frequency: 2 },
				frequency: 2,
			},
			weekly: {
				startWeekOn: {
					sunday: true,
					monday: false,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: false,
					saturday: false,
				},
				frequency: 1,
			},
			monthly: { frequency: 1 },
			completedDays: {},
			missedDays: {},
			longestStreak: 79,
			currentStreak: 62,
			completed: false,
		},
	};
}


export default defaultTasks