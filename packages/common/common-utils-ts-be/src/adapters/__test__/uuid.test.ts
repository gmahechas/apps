import { generateIdV1 } from '../uuid';

describe('generateIdV1', () => {
	it('should return a string', () => {
		const id = generateIdV1();
		expect(typeof id).toBe('string');
	});
});
