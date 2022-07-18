import { setupWorker } from 'msw';
import { handlers } from './handlesrs/index';

export const worker = setupWorker(...handlers);
