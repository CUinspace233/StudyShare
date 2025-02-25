import { showUserDetails } from '../user/showUserDetails';
import { register } from '../auth/register';
import { clear } from '../helperFunction';

const DEFAULT_THUMBNAIL_URL = 'https://i.pinimg.com/736x/bf/4f/6d/bf4f6d3010d3ecdfb3eb6770f420dde9.jpg';

beforeEach(() => {
  clear();
});
afterAll(() => {
  clear();
});

let user1Token: { token: string } | { error: string };
beforeEach(async () => {
  user1Token = await register('Mark', 'Comp1531YAY', DEFAULT_THUMBNAIL_URL);
});

describe('showUserDetails', () => {
  // test('has the correct return type if no error', async () => {
  //   expect(user1Token).toStrictEqual({ token: expect.any(String) });

	// 	const userdetails = await showUserDetails('Mark');
	// 	expect(userdetails).toStrictEqual({
	// 		user: {
	// 			userId: expect.any(Number),
	// 			username: 'Mark',
	// 			avatar: DEFAULT_THUMBNAIL_URL
	// 		}
	// 	});
  // });

  // test('User not found', async () => {
  //   const userdetails = await showUserDetails('May');
  //   expect(userdetails).toStrictEqual({ error: 'User not found' });
  // });
});
