import React from 'react';
import { Counter } from 'app/features/counter';
import Providers from './providers';

// App providers
export const AppView = () => (
  <Providers>
    <Counter />
  </Providers>
);
