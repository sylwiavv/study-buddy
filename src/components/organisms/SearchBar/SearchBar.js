import { Input } from '../../atoms/Input/Input.styles';
import React, { useEffect, useState } from 'react';
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo } from './SearchBar.styles';
import { useStudents } from '../../../hooks/useStudents';
import { debounce } from 'lodash';

const SearchBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchPhrase, setSearchPhrase] = useState('');
  const [machingStudents, setMachingStudents] = useState([]);
  const { findStudents } = useStudents();

  // const getMatchingStudents = React.useCallback(debounce(async (e) => {
  //   const { students } = await findStudents(searchPhrase);
  //   setMachingStudents(students);
  // })), 500), []);

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMachingStudents(students);
  }, 200);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} />
        {searchPhrase && machingStudents.length ? (
          <SearchResults>
            {machingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
