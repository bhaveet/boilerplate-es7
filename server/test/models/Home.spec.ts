'use strict'

import { VersionModel } from '../../app/models/'

describe('Home Module Testing', () => {
  test('Get Server Version', async() => {
    const expectedResult = {
      name: 'nodejs-es7-boilerplate',
      version: '1.0.0',
      description: 'Typescript boilerplate ES7',
    }
    let result = await VersionModel.get();
    expect(result).toMatchObject(expectedResult);
  })
})
