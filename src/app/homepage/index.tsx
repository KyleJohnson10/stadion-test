import React, { FunctionComponent, useContext, useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { FeaturedCard } from '../../components/featuredCard';
import { ArticleCard } from '../../components/articleCard';

export const BodyContainer = styled(Container)`
  @media (min-width: 1252px) {
    max-width: 1252px;
  }
`;

export const StyledRow = styled(Row)`
  margin: 32px -15px;
`;

export const StyledColumn = styled(Col)`
  padding-left: 0;
  padding-right: 0;
`;

export const Homepage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <FeaturedCard
        title="HARLEQUINS CROWNED PREMIERSHIP CHAMPIONS"
        category="mens"
        featuredImage="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/harlequins-cover-image.png"
        date="12 Sep 2021"
        type="video"
      />
      <BodyContainer>
        <StyledRow>
          <Col md={4}>
            <ArticleCard
              title="Epicurus in armatum hostem impetum fecisse"
              category="womens"
              featuredImage="https://picsum.photos/500"
              date="24 Nov 2021"
              type="article"
            />
          </Col>
          <Col md={4}>
            <ArticleCard
              title="Epicurus in armatum hostem impetum fecisse"
              category="mens"
              featuredImage="https://picsum.photos/500"
              date="24 Nov 2021"
              type="gallery"
            />
          </Col>
          <Col md={4}>
            <ArticleCard
              title="Epicurus in armatum hostem impetum fecisse"
              category="academy"
              featuredImage="https://picsum.photos/500"
              date="24 Nov 2021"
              type="video"
            />
          </Col>
        </StyledRow>
      </BodyContainer>
    </>
  );
};
