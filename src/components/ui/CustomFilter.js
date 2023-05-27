import React, { useCallback, useEffect, useState } from 'react';
import { LegacyDiv } from '../index';
import FormComponent from '../LegacyForm/components/FormComponent';
import { debounce, isEmpty } from 'lodash';

export default (props) => {
  const {
    filterConfiguration = [],
    fetchedData = [],
    containerStyleProps = {},
    filterContainerStyleProps = {},
    setFilters,
    setIsFetching,
    defaultLimit = 5,
    children,
  } = props;

  if (!fetchedData) {
    return null;
  }

  const [filterFields, setFilterFields] = useState(
    filterConfiguration.reduce((previousValue, currentValue) => {
      if (currentValue.id === 'limit') {
        return {
          ...previousValue,
          [currentValue.id]: defaultLimit,
        };
      }

      return {
        ...previousValue,
        [currentValue.id]: '',
      };
    }, {}),
  );

  const [data] = fetchedData;
  const debounceCall = useCallback(
    debounce((field, value) => handleFilter(field, value), 300),
    [],
  );

  const handleFilter = (currentFilter, currentValue) => {
    setFilterFields((oldFilter) => ({
      ...oldFilter,
      [currentFilter]: currentValue,
    }));
  };

  useEffect(() => {
    setFilters(filterFields);
    setIsFetching(true);
  }, [filterFields]);

  return (
    <LegacyDiv styleProps={containerStyleProps}>
      <LegacyDiv styleProps={filterContainerStyleProps}>
        {filterConfiguration.map((filter, index) => {
          const {
            id,
            type,
            placeholder,
            fieldStyleProps,
            fieldContainerStyleProps,
            options = [],
            optionStyleProps,
          } = filter;

          const filterOptions = isEmpty(options) && data ? data[id] : options;

          return (
            <LegacyDiv key={index} styleProps={fieldContainerStyleProps}>
              <FormComponent
                id={id}
                type={type}
                placeholder={placeholder}
                fieldStyleProps={fieldStyleProps}
                options={filterOptions}
                optionStyleProps={optionStyleProps}
                onClick={(value) => debounceCall(id, value)}
                onChange={(value) => debounceCall(id, value)}
              />
            </LegacyDiv>
          );
        })}
      </LegacyDiv>
      {children}
    </LegacyDiv>
  );
};
