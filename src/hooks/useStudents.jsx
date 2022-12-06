import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get('/groups');
        setGroups(result.data.groups);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!groupId) return;
    (async () => {
      try {
        const result = await axios.get(`/students/${groupId}`);
        setStudents(result.data.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [groupId, groups]);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    groups,
    groupId,
    students,
    findStudents,
  };
};
