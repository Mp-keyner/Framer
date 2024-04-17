export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "https://images.pexels.com/photos/1652296/pexels-photo-1652296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Airplane" },
  {
    poster: "https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Family man",
  },
  {
    poster: "https://images.pexels.com/photos/8041087/pexels-photo-8041087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laboratory",
  },
  { poster: "https://images.pexels.com/photos/2601203/pexels-photo-2601203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Napoleon" },
  {
    poster: "https://images.pexels.com/photos/8512212/pexels-photo-8512212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Person in Darkness",
  },
  {
    poster: "https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Scary Building",
  },
  { poster: "/img/apple-tv-rebuild/posters/stars.webp", name: "Stars" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
