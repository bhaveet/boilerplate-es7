'use strict'

import { HomeModel } from '../../api/models/Home'

describe('Home Module Testing', () => {
  test('Get Server Version', async() => {
    const expectedResult = {
      name: 'nodejs-es7-boilerplate',
      version: '1.0.0',
      description: 'ES7 boilerplate',
    }
    let result = await HomeModel.getVersion();
    expect(result).toMatchObject(expectedResult);
  })
})
