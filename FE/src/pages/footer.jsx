import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default () => (
  <footer className="bottom-0 h-20 bg-blue-900 flex items-center mt-10">
    <div className="flex items-center mx-auto">
      <div>
        <a
          href="https://github.com/yhnb3/movie_tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="h-10 w-10" />
        </a>
      </div>
    </div>
  </footer>
);
