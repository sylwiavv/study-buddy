import { setupWorker } from 'msw';
import { handlers } from './handlesrs/index';
import { db } from './db';

export const worker = setupWorker(...handlers);
const createStudents = () => {
  db.group.create({
    id: 'A',
  });
  db.group.create({
    id: 'B',
  });
  db.group.create({
    id: 'C',
  });
  db.teacher.create();
  for (let i = 0; i < 16; i++) {
    db.student.create();
    db.event.create();
  }
};

createStudents();

window.mocks = {
  createStudents,
  getStudents: () => db.student.getAll(),
  getEvents: () => db.event.getAll(),
  getGroups: () => db.group.getAll(),
};
