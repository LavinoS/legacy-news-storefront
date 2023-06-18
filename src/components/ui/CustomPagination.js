import React, { useState } from 'react';
import { LegacyButton, LegacyDiv } from '../index';

const DataRenderer = (props) => {
  const { start, end, data, template: TemplateToRender } = props;

  const currentData = data.slice(start, end);

  return currentData.map((data, index) => (
    <TemplateToRender key={index} {...data} />
  ));
};

const Pagination = (props) => {
  const { totalPages, setCurrentPage, currentPage } = props;

  const handleChangePage = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const handleChange = (number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage((prevState) => prevState + number);
  };

  if (totalPages === 1) {
    return '';
  }

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          justifyContent: 'start',
          margin: '24px 0',
          '& > button': {
            width: 'fit-content',
            color: '#a3a5a8',
            fontSize: '14px',
            fontWeight: '700',
            background: '#edeff2',
            textTransform: 'uppercase',
            border: 'none',
            margin: '0 6px',
          },
        },
      }}
    >
      {currentPage > 1 && (
        <LegacyButton text="prev" onClick={() => handleChange(-1)} />
      )}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page, index) => (
          <LegacyButton
            key={index}
            onClick={() => handleChangePage(page)}
            text={page}
          />
        ),
      )}
      {currentPage !== totalPages && (
        <LegacyButton text="next" onClick={() => handleChange(1)} />
      )}
    </LegacyDiv>
  );
};

export default (props) => {
  const { itemsPerPage, data, template } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return (
    <>
      <LegacyDiv>
        <DataRenderer
          currentPage={currentPage}
          limit={itemsPerPage}
          data={data}
          template={template}
          start={start}
          end={end}
        />
      </LegacyDiv>
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
