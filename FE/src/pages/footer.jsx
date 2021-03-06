import React from 'react';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';

export default () => (
  <footer className="absolute w-full bottom-0 h-20 bg-blue-900 flex items-center">
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
