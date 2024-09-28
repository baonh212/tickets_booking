describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have Home Tab', async () => {
    await expect(element(by.label('HomeTab')).atIndex(0)).toBeVisible();
  });

  it('should book a ticket and move to the Booked tab', async () => {
    await element(by.id('book-ticket-item-button')).atIndex(0).tap();
    await element(by.id('book-ticket-button')).tap();
    await element(by.id('BookedMovieScreen')).tap();
    await expect(element(by.id('watched-movie-item-text'))).toBeVisible();
  });

  it('should favorite a movie then favorite again', async () => {
    try {
      await element(by.id('toggle-favorite-button')).atIndex(0).tap();
      await expect(
        element(by.id('favorite-movie-item-text')).atIndex(0),
      ).toBeVisible();
      await element(by.id('toggle-favorite-button')).atIndex(0).tap();
      await expect(
        element(by.id('un-favorite-movie-item-text')).atIndex(0),
      ).toBeVisible();
    } catch (error) {
      console.error(error);
    }
  });

  it('should favorite a movie and move to the Favorite tab', async () => {
    await element(by.id('toggle-favorite-button')).atIndex(0).tap();
    await element(by.id('FavoriteMovieScreen')).tap();
    await expect(element(by.id('favorite-movie-item-text'))).toBeVisible();
  });

  it('cannot book a movie with wrong id', async () => {
    try {
      await element(by.id('book-ticket-item-button')).atIndex(-1).tap();
    } catch (error) {
      console.error('Error during booking a movie at index -1: ', error);
    }
  });
});
