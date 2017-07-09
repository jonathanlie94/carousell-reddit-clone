import * as sampleDataManager from '../';

describe('sampleDataManager', () => {
  it('should be able to get a single default data', () => {
    expect(sampleDataManager.getData(1).id).toEqual(1);
  });

  it('should be able to get default data list', () => {
    expect(Object.keys(sampleDataManager.getDataList(1).topics).length).toEqual(
      20
    );
  });

  it('should be able to add new item', () => {
    const total = sampleDataManager.getDataList(1).meta.total;
    sampleDataManager.create({ title: 'Title 1', description: '' });
    expect(sampleDataManager.getDataList(1).meta.total).toEqual(total + 1);
  });

  it('should be able to get last page after adding new item', () => {
    const meta = sampleDataManager.getDataList(1).meta;
    sampleDataManager.create({ title: 'Title 2', description: '' });
    expect(
      Object.keys(
        sampleDataManager.getDataList(Math.ceil(meta.total / meta.per_page))
          .topics
      ).length
    ).toEqual(meta.total - 2 * meta.per_page + 1);
  });

  it('should reject if title is more than 255 characters', () => {
    const total = sampleDataManager.getDataList(1).meta.total;
    expect(
      sampleDataManager.create({
        title:
          'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. ',
        description: '',
      }).title
    ).toEqual('Title is too long!');
    expect(sampleDataManager.getDataList(1).meta.total).toEqual(total);
  });

  it('should be able to upvote correctly', () => {
    const initialVote = sampleDataManager.getData(1).votes;
    sampleDataManager.upvote(1);
    expect(initialVote + 1).toEqual(sampleDataManager.getData(1).votes);
  });

  it('should be able to downvote correctly', () => {
    const initialVote = sampleDataManager.getData(1).votes;
    sampleDataManager.downvote(1);
    expect(initialVote - 1).toEqual(sampleDataManager.getData(1).votes);
  });
});
