import React from 'react';
import { getData, getDataList, create } from '../';

describe('sampleDataManager', () => {
  it('should be able to get default data', () => {
    expect(Object.keys(getDataList(1).topics).length).toEqual(20);
    expect(getDataList(1).meta.total).toEqual(20);
  });

  it('should be able to add new item', () => {
    expect(getDataList(1).meta.total).toEqual(20);
  });

  it('should be able to get second page after adding new item' , () => {
    create({ title: 'Title 1', description: '' });
    expect(Object.keys(getDataList(1).topics).length).toEqual(20);
    expect(Object.keys(getDataList(2).topics).length).toEqual(1);
  });
});
