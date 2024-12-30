const firstName = 'Samvit';
const lastName = 'Valluri';
const suffix = 'Samvit Valluri';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
