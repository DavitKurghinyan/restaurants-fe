import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import * as Styled from '../styled';
import { ExpandMore } from '../../../images/svgs/expandMore';
import { Like } from '../../../images/svgs/like';
import { DisLike } from '../../../images/svgs/disLike';
import { BookMark } from '../../../images/svgs/bookMark';
import Percent from './Percent';
import { STORY_CATEGORIES } from '../constants';
import Img from '../../../components/Img';

const ListItem = ({ item }) => (
  <Styled.Item>
    <Styled.ItemBlock
      expandIcon={<ExpandMore />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      {(item.category === STORY_CATEGORIES.MP ||
        item.category === STORY_CATEGORIES.OP) && (
        <>
          <Styled.ImageBlock>
            <Img src={item.domain_cached_large_logo_url} alt="domain-logo" />
            <Styled.DomainBlock>
              <Styled.LinkTo href={item.url} target="_blank">
                {item.title}
              </Styled.LinkTo>
              <Styled.DomainInfo>
                <Img
                  src={item.author_image_url || item.domain_cached_logo_url}
                  alt="domain-info"
                />
                <h4>{item.domain_name}</h4>
                <Styled.Text>{moment(item.publishTime).fromNow()} </Styled.Text>
              </Styled.DomainInfo>
            </Styled.DomainBlock>
          </Styled.ImageBlock>
          <Percent percent={Math.floor(item.dynamic_cfscore.value)} />
        </>
      )}
    </Styled.ItemBlock>
    <Styled.ExpandedAccordion>
      {item.description}
      <Styled.CommentsBlock>
        <Styled.CommentsButton>
          <Like />
          like
        </Styled.CommentsButton>
        <Styled.CommentsButton>
          <DisLike />
          DisLike
        </Styled.CommentsButton>
        <Styled.CommentsButton>
          <BookMark />
          BookMark
        </Styled.CommentsButton>
      </Styled.CommentsBlock>
    </Styled.ExpandedAccordion>
  </Styled.Item>
);
ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
