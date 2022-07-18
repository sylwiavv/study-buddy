import React, { useState, useEffect } from 'react';
import { NewSectionHeader, Wrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from '../../atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
            allArticles {
              id
              title
              category
              content
              image {
                url
              }
            }
          }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError(`Sorry we couldn't show you articles`));
  }, []);

  return (
    <Wrapper>
      <NewSectionHeader>University news feed</NewSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image.url ? <img src={image.url} alt="Article" /> : null}
            </ContentWrapper>
            <Button isBig>Click Me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewSectionHeader> {error ? error : 'Loading...'}</NewSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
