import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { StyledRow } from '../../app/homepage';
import { Container, Col } from 'styled-bootstrap-grid';
import { Tag } from '../tag';
import { ICard } from '../../store/interfaces';

const CardContainer = styled(Container)<{featuredImage: string}>`
  @media (min-width: 1252px) {
    max-width: 1252px;
  }

  @media (max-width: 991px) {
    max-width: none;
  }

  min-height: 582px;
  background-repeat: no-repeat;
  background-image: url(${({ featuredImage }): string => (featuredImage ? featuredImage : 'https://picsum.photos/500')});
  background-size: cover;
  background-position: center;
  padding: 0;
`;

const BannerColumn = styled(Col)`
  background-color: #fff;
  opacity 0.96;
  min-height: 582px;

  @media (max-width: 767px) {
    opacity: 0.85;
  }
`;

const ColumnContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-top: 3rem;
  }
`;

const TopContent = styled.div`
  padding: 3rem 32px 32px 32px;
`;

const BottomContent = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 63px;
  }
`;

export const FeaturedCard: FunctionComponent<ICard> = (props: ICard) => {
  const { title, featuredImage, category, date, url, type } = props;

  return (
    <CardContainer featuredImage={featuredImage}>
      <StyledRow>
        <BannerColumn md={4}>
          <ColumnContent>
            <TopContent>
              <Tag category={category} />
              <h1>{title}</h1>
            </TopContent>
            <BottomContent>
              <h3>{date}</h3>
              {type === "video" && (
                <img
                  alt="icon"
                  src="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/video-icon-no-bg.png"></img>
              )}
            </BottomContent>
          </ColumnContent>
        </BannerColumn>
      </StyledRow>
    </CardContainer>
  );
};
