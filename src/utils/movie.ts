import {faker} from '@faker-js/faker';
import {IMovie} from '../types';

const generateMovies = (count: number): Record<string, IMovie> => {
  let movies: Record<string, IMovie> = {};
  for (let i = 0; i < count; i++) {
    movies[i.toString()] = {
      id: i.toString(),
      title: faker.lorem.words(20),
      description: faker.lorem.sentence(),
      imageUrl: faker.image.urlPicsumPhotos({width: 200, height: 300}),
      watched: false,
      isFavorite: false,
    };
  }
  return movies;
};

export {generateMovies};
