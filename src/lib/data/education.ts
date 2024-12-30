import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Purdue University',
		shortDescription: 'Bachelor of Science(B.S.), Mechanical Engineering',
		description: '',
		location: 'Indiana',
		logo: Assets.Purdue,
		name: '',
		organization: 'West Lafayette',
		period: { from: new Date(2018, 7, 1), to: new Date(2022, 4, 1) },
		slug: 'Purdue',
		subjects: []
	}
];

const EducationData = { title, items };

export default EducationData;
