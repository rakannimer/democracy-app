import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Slide } from './Slide';
import { slidesData, Screen } from './data';

storiesOf('Instruction', module)
  .addDecorator(withKnobs)
  .add('Slide', () => {
    const slideSelected = select(
      'Slide',
      Object.keys(slidesData),
      Screen.Willkommen,
    ) as Screen;
    return (
      <Slide
        head={slidesData[slideSelected].head}
        images={slidesData[slideSelected].images}
        nextPage={() => {}}
        isNew={slidesData[slideSelected].isNew}
      />
    );
  });
