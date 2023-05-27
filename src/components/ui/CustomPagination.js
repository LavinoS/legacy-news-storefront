import React from 'react';
import usePagination from '../../hooks/usePagination';
import { LegacyButton, LegacyDiv, LegacyParagraph } from '../index';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export default (props) => {
  const {
    onPageChange = () => null,
    totalCount,
    siblingCount = 1,
    pageSize = 5,
    currentPage = 1,
    numbering = 3,
  } = props;

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
    numbering,
  });

  const isFirstPage = currentPage === 1;
  const isLastPage =
    paginationRange[paginationRange.length - 1] === currentPage;

  if (currentPage === 0 || paginationRange[paginationRange.length - 1] < 2) {
    return null;
  }

  const handleChangePage = (value) => {
    onPageChange(currentPage + value);
  };

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          width: 'fit-content',
        },
      }}
    >
      {!isFirstPage && (
        <LegacyButton
          onClick={() => handleChangePage(-1)}
          styleProps={{
            ALL_DEVICES: {
              width: 'fit-content',
              height: 'fit-content',
              padding: 10,
              display: 'flex',
              alignItems: 'center',
              color: '#e91e63',
              border: '1px solid #e91e63',
              borderRadius: 8,
              background: '#FFF',
              marginRight: '14px',
            },
          }}
        >
          <MdOutlineKeyboardArrowLeft size="20px" />
        </LegacyButton>
      )}
      {paginationRange.map((pageNumber, index) => {
        const isSelected = pageNumber === currentPage;

        if (pageNumber === '...') {
          return (
            <LegacyParagraph
              key={index}
              styleProps={{
                ALL_DEVICES: {
                  padding: '0 10px',
                  color: '#e91e63',
                  background: '#FFF',
                  fontWeight: '700',
                  width: '42px',
                },
              }}
              text="..."
            />
          );
        }

        return (
          <LegacyParagraph
            styleProps={
              !isSelected
                ? {
                    ALL_DEVICES: {
                      padding: '0 10px',
                      color: '#e91e63',
                      background: '#FFF',
                      cursor: 'pointer',
                      fontWeight: '700',
                      width: '42px',
                    },
                  }
                : {
                    ALL_DEVICES: {
                      padding: 10,
                      cursor: 'pointer',
                      fontWeight: '700',
                      color: '#FFF',
                      borderRadius: 8,
                      background: '#e91e63',
                      width: '42px',
                    },
                  }
            }
            key={index}
            text={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          />
        );
      })}
      {!isLastPage && (
        <LegacyButton
          styleProps={{
            ALL_DEVICES: {
              width: 'fit-content',
              height: 'fit-content',
              padding: 10,
              display: 'flex',
              alignItems: 'center',
              color: '#e91e63',
              border: '1px solid #e91e63',
              borderRadius: 8,
              background: '#FFF',
              marginLeft: '14px',
            },
          }}
          onClick={() => handleChangePage(1)}
        >
          <MdOutlineKeyboardArrowRight size="20px" />
        </LegacyButton>
      )}
    </LegacyDiv>
  );
};
