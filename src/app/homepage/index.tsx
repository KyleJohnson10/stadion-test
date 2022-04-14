import React, { FunctionComponent, useContext, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { FeaturedCard } from '../../components/featuredCard';
import { ArticleCard } from '../../components/articleCard';
import { AppContext } from '../../store/AppContext';
import { PromoCard } from '../../components/promo';

export const BodyContainer = styled(Container)`
  @media (min-width: 1252px) {
    max-width: 1252px;
  }
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const StyledRow = styled(Row)`
  margin: 0 -15px;

  @media (max-width: 767px) {
    margin 0;
  }
`;

export const StyledColumn = styled(Col)`
  padding-left: 0;
  padding-right: 0;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const IndicatorContainer = styled(StyledRow)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin-top: 32px;
  margin-bottom: 32px;

  h4 {
    cursor: pointer;
  }

  img {
    opacity: 0.4;
    cursor: pointer;
  }

  .disabled {
    opacity: 0.2;
    cursor: no-drop;
  }

  .active {
    color: #c80550;
  }
`;

export const Homepage: FunctionComponent<RouteComponentProps> = () => {
  const {
    state: { cards },
  } = useContext(AppContext);

  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <FeaturedCard
        title="HARLEQUINS CROWNED PREMIERSHIP CHAMPIONS"
        category="mens"
        featuredImage="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/harlequins-cover-image.png"
        date="12 Sep 2021"
        type="video"
        url="https://www.google.co.uk"
        categoryUrl="https://www.quins.co.uk/"
      />
      <BodyContainer>
        <StyledRow>
          {cards?.map((card, i) => (
            <StyledColumn md={6} lg={4}>
              <ArticleCard
                title={card.title}
                category={card.category}
                featuredImage={card.featuredImage}
                date={card.date}
                type={card.type}
                url={card.url}
                categoryUrl={card.categoryUrl}
              />
            </StyledColumn>
          ))}
          <StyledColumn md={6} lg={4}>
              <PromoCard
                title="OFFICIAL HOME KIT"
                backgroundImage="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/promo-background.svg"
                featuredImage="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/shirt-promo.png"
                label="AVAILABLE NOW"
                buttonText="SHOP NOW"
                buttonLink="https://www.quins.co.uk/"
              />
            </StyledColumn>
        </StyledRow>
        <IndicatorContainer>
          <Indicator>
            <h4
              className={pageNumber === 1 ? 'active' : ''}
              onClick={() => {
                setPageNumber(1);
              }}>
              1
            </h4>
            <h4
              className={
                pageNumber === 2
                  ? 'active'
                  : cards && cards.length <= 12
                  ? 'disabled'
                  : ''
              }
              onClick={() => {
                setPageNumber(2);
              }}>
              2
            </h4>
            <h4
              className={
                pageNumber === 3
                  ? 'active'
                  : cards && cards.length < 24
                  ? 'disabled'
                  : ''
              }
              onClick={() => {
                setPageNumber(3);
              }}>
              3
            </h4>
            <h4
              className={
                pageNumber === 4
                  ? 'active'
                  : cards && cards.length < 36
                  ? 'disabled'
                  : ''
              }
              onClick={() => {
                setPageNumber(4);
              }}>
              4
            </h4>
            <h4
              className={
                pageNumber === 5
                  ? 'active'
                  : cards && cards.length < 48
                  ? 'disabled'
                  : ''
              }
              onClick={() => {
                setPageNumber(5);
              }}>
              5
            </h4>
            <img
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
              alt="indicator-arrow"
              src="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/arrow.svg"
            />
          </Indicator>
        </IndicatorContainer>
      </BodyContainer>
    </>
  );
};
