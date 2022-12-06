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
  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = req.body.searchPhrase
      ? students.filter((student) => student.name.toLowerCase().includes(req.body.searchPhrase.toLowerCase()))
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
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
