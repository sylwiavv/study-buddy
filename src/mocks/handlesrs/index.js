import { rest } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  rest.get('/groups', (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        groups,
      })
    );
  }),
  rest.get('/students/:group', (req, res, context) => {
    if (req.params.group) {
      const reqUpperCase = req.params.group.toUpperCase();
      const matchStudents = students.filter((student) => student.group.toUpperCase() === reqUpperCase);
      return res(
        context.status(200),
        context.json({
          students: matchStudents,
        })
      );
    }
    return res(
      context.status(200),
      context.json({
        students,
      })
    );
  }),
];
