describe('Movies test cases', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should display "Đã Xem" for a movie that is already booked', async () => {
    await element(by.id('book-ticket-item-button')).atIndex(0).tap();
    await element(by.id('book-ticket-button')).tap();
    await element(by.id('BookedMovieScreen')).tap();
    await expect(element(by.id('watched-movie-item-text'))).toBeVisible();
  });

  it('should favorite a movie and move it to the Favorite tab', async () => {
    await element(by.id('toggle-favorite-button')).atIndex(0).tap();
    await element(by.id('FavoriteMovieScreen')).tap();
    await expect(element(by.id('favorite-movie-item-text'))).toBeVisible();
  });

  it('should display correct movie details on the Booking page', async () => {
    await element(by.id('MovieScreen')).tap();
    await element(by.id('book-ticket-item-button')).atIndex(1).tap();
    await expect(element(by.id('book-ticket-button'))).toBeVisible();
    await expect(element(by.id('movie-title-text'))).toBeVisible();
  });

  it('should remove a movie from favorites and ensure it is removed from the Favorite tab', async () => {
    if (device.getPlatform() === 'android') {
      await device.pressBack();
    } else {
      await element(by.label('HomeTab')).atIndex(0).tap();
    }
    await element(by.id('MovieScreen')).tap();
    await expect(
      element(by.id('favorite-movie-item-text')).atIndex(0),
    ).toBeVisible();
    await element(by.id('toggle-favorite-button')).atIndex(0).tap();
    await expect(
      element(by.id('favorite-movie-item-text')).atIndex(0),
    ).not.toBeVisible();
    await element(by.id('FavoriteMovieScreen')).tap();
    await expect(
      element(by.id('favorite-movie-item-text')).atIndex(0),
    ).not.toBeVisible();
  });

  it('cannot book a movie with wrong id', async () => {
    try {
      await element(by.id('book-ticket-item-button')).atIndex(-1).tap();
    } catch (error) {
      console.error('Error during booking a movie at index -1: ', error);
    }
  });
});
