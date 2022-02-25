'use strict'

import { HealthModel } from '../../Domain: Home/models/'

describe('Home Module Testing', () => {
  test('Get Server Version', async() => {
    const expectedResult = {
      name: 'nodejs-es7-boilerplate',
      version: '1.0.0',
      description: 'ES7 boilerplate',
    }
    let result = await HealthModel.get();
    expect(result).toMatchObject(expectedResult);
  })
})
