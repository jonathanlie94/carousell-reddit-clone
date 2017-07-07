import { getData, getDataList, create } from '../';

describe('sampleDataManager', () => {
  it('should be able to get a single default data', () => {
    expect(getData(1).id).toEqual(1);
    expect(getData(1).title).toEqual(
      'Today teaser date showed up in Orisa trailer.'
    );
    expect(getData(1).votes).toEqual(583);
    expect(getData(1).description).toEqual(
      '7 on the screen, 4 on the toolbox below. I might be reaching but I BELIEVE THIS.'
    );
  });

  it('should be able to get default data list', () => {
    expect(Object.keys(getDataList(1).topics).length).toEqual(20);
    expect(getDataList(1).meta.total).toEqual(20);
  });

  it('should be able to add new item', () => {
    create({ title: 'Title 1', description: '' });
    expect(getDataList(1).meta.total).toEqual(21);
  });

  it('should be able to get second page after adding new item', () => {
    create({ title: 'Title 2', description: '' });
    expect(Object.keys(getDataList(1).topics).length).toEqual(20);
    expect(Object.keys(getDataList(2).topics).length).toEqual(2);
  });

  it('should reject if title is more than 255 characters', () => {
    expect(getDataList(1).meta.total).toEqual(22);
    expect(
      create({
        title:
          'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. ',
        description: '',
      }).title
    ).toEqual('Title is too long!');
    expect(getDataList(1).meta.total).toEqual(22);
  });
});
