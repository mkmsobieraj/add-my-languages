import React, { FC } from 'react';
import './countries-section.css';
import { Section } from '../../section/section';
import { Country } from '../country/country';

export const CountriesSection: FC = () => (
  <Section><div className='CountriesSection'>
    <Country/>
    </div></Section>
)