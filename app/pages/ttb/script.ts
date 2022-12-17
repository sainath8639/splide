import { Splide } from '../../../src/js';
import { insertHtml } from '../../js/html';
import '../../js/common';
import './style.scss';


insertHtml({ id: 'splide01', heading: 'Loop' });

new Splide('#splide01', {
  width: 400,
  type: 'loop',
  perPage: 2,
  padding: '3rem',
  gap: '1rem',
  direction: 'ttb',
  height: '90vh',
}).mount();