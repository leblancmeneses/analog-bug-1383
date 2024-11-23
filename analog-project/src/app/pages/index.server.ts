import { PageServerLoad } from '@analogjs/router';

export const load = async (_pageServerLoad: PageServerLoad) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    hello: 'world',
  };
};
