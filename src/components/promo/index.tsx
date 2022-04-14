import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IPromo } from '../../store/interfaces';

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const TopContent = styled.div`
  padding: '32px';
  display: flex;
  justify-content: center;

  .icon {
    width: 63px;
  }

  .panel__image {
    width: 90%;
  }
`;

const BottomContent = styled.div`
  padding: 0 32px 20px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PromoCard: FunctionComponent<IPromo> = (props: IPromo) => {
  const {
    title,
    featuredImage,
    backgroundImage,
    label,
    buttonLink,
    buttonText,
  } = props;

  return (
    <ArticleContainer>
      <ColumnContent
        onClick={(): void => {
          if (buttonLink) {
            window.open(buttonLink, '_blank');
          }
        }}
        featuredImage={backgroundImage || ''}>
        <TopContent>
          <img className="panel__image" alt="icon" src={featuredImage}></img>
        </TopContent>
        <BottomContent>
          <h3 style={{ marginBottom: '8px' }}>{label}</h3>
          <h3
            className="promo__text"
            style={{ color: '#fff', marginBottom: '16px' }}>
            {title}
          </h3>
          <a href={buttonLink} target="_blank" rel="noreferrer">{buttonText}</a>
        </BottomContent>
      </ColumnContent>
    </ArticleContainer>
  );
};
