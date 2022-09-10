import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styled';
import MultiSelect from '../../../components/MultiSelect';
import { LANGUAGES, ORDER_BY, REFRESH_INTERVAL } from '../constants';
import { StyledButton } from '../../../components/Button';
import { TriangleIcon } from '../../../images/svgs/triangle';
import { FilterIcon } from '../../../images/svgs/filter';
import { RefreshIcon } from '../../../images/svgs/refresh';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const FiltersBar = ({
  handleChange,
  data,
  refreshInterval,
  setRefreshInterval,
  onReset,
  onReload,
}) => {
  const [isFilterActive, setFilterActive] = useState(false);

  const windowDimensions = useWindowDimensions();

  return (
    <Styled.FiltersBlock>
      <Styled.FilterHeading>
        <Styled.FilterButton onClick={onReload}>
          <RefreshIcon /> {windowDimensions.width > 1365 && 'Refresh'}
        </Styled.FilterButton>
        <Styled.FilterButton
          onClick={() => setFilterActive(!isFilterActive)}
          isFilterActive={isFilterActive}
        >
          <FilterIcon />
          {windowDimensions.width > 767 && 'Filter'}
          <Styled.TriangleBlock>
            {isFilterActive ? <TriangleIcon /> : null}
          </Styled.TriangleBlock>
        </Styled.FilterButton>
      </Styled.FilterHeading>
      {isFilterActive ? (
        <Styled.FilterBody>
          <MultiSelect
            handleChange={(ev, elem) => handleChange(ev, 'languages', elem)}
            selected={data.languages}
            title="Languages"
            options={LANGUAGES}
            isMultiple
          />
          <MultiSelect
            handleChange={ev => handleChange(ev, 'order')}
            selected={data.order}
            title="Order"
            options={ORDER_BY}
          />
          <MultiSelect
            handleChange={setRefreshInterval}
            selected={refreshInterval}
            title="AUTOREFRESH"
            options={REFRESH_INTERVAL}
          />
          <StyledButton onClick={onReset}>RESET</StyledButton>
        </Styled.FilterBody>
      ) : null}
    </Styled.FiltersBlock>
  );
};

FiltersBar.propTypes = {
  handleChange: PropTypes.func,
  onReload: PropTypes.func,
  onReset: PropTypes.func,
  setRefreshInterval: PropTypes.func,
  refreshInterval: PropTypes.number,
  data: PropTypes.any,
};

export default FiltersBar;
