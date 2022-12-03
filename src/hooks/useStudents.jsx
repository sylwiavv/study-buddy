import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({groupId = ''} = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!groupId) return;
    axios
      .get(`/students/${groupId}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [groupId, groups]);
  return {
    groups,
    groupId,
    students,
  };
}