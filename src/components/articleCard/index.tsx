import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Tag } from '../tag';
import { ICard } from '../../store/interfaces';

const ArticleContainer = styled.div`
  padding: 0 15px;
`;

const ColumnContent = styled.div<{ featuredImage: string }>`
  min-height: 606px;
  background-repeat: no-repeat;
  background-image: url(${({ featuredImage }): string =>
    featuredImage ? featuredImage : ''});
  background-size: cover;
  background-position: center;
  height: 100%;
  border-bottom: 1px solid #bebebe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const TopContent = styled.div<{ type: string | undefined }>`
  padding: ${({ type }): string =>
    type === 'article' ? '0' : '3rem 32px 32px 32px'};
  display: flex;
  justify-content: flex-end;

  .icon {
    width: 63px;
  }

  .panelImage {
    width: 100%;
  }
`;

const BottomContent = styled.div<{ type: string | undefined }>`
  padding: ${({ type }): string => (type === 'article' ? '32px 0' : '32px')};
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 1rem;
  }
`;

export const ArticleCard: FunctionComponent<ICard> = (props: ICard) => {
  const { title, featuredImage, category, date, url, type, categoryUrl } = props;

  return (
    <ArticleContainer>
      <ColumnContent
        onClick={(): void => {
          if (url) {
            window.open(url, '_blank');
          }
        }}
        featuredImage={
          type === 'gallery' || type === 'video' ? featuredImage : ''
        }>
        <TopContent type={type}>
          {type === 'video' ? (
            <img
              className="icon"
              alt="icon"
              src="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/video-icon.svg"></img>
          ) : type === 'gallery' ? (
            <img
              className="icon"
              alt="icon"
              src="https://jktechproductions.s3.eu-west-2.amazonaws.com/kyle/gallery-icon.svg"></img>
          ) : (
            <img className="panelImage" alt="icon" src={featuredImage}></img>
          )}
        </TopContent>
        <BottomContent type={type}>
          <Tag categoryUrl={categoryUrl} category={category} />
          <h3
            style={
              type === 'gallery' || type === 'video' ? { color: '#fff' } : {}
            }>
            {title}
          </h3>
          <h3
            style={
              type === 'gallery' || type === 'video'
                ? { color: '#fff' }
                : { opacity: '0.6' }
            }>
            {date}
          </h3>
        </BottomContent>
      </ColumnContent>
    </ArticleContainer>
  );
};
