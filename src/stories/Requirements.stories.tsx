import React from 'react';
import { storiesOf } from '@storybook/react';

import { Requirements } from '../components/Requirements';

const stories = storiesOf('app test', module);

stories.add('app', () => {
  return <Requirements />;
});
