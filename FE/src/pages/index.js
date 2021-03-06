/* eslint-disable import/prefer-default-export */
import withSplitting from '../withSplitting';

export const Home = withSplitting(() => import('./home.tsx'));
export const Header = withSplitting(() => import('./Header.tsx'));
export const Footer = withSplitting(() => import('./footer'));
export const MovieContainer = withSplitting(() =>
  import('./movies/movieContainer'),
);
export const StreamingContainer = withSplitting(() =>
  import('./streaming/streamingContainer'),
);
export const SearchResult = withSplitting(() =>
  import('./search/searchResult'),
);
export const SearchContent = withSplitting(() =>
  import('./search/searchContent'),
);
export const PersonContainer = withSplitting(() =>
  import('./person/personContainer'),
);
