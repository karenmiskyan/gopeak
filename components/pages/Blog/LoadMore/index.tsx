import React from 'react';

interface LoadMoreProps {
  onClick: () => void;
  loadMore: string;
  disabled: boolean;
}

const LoadMore = ({ onClick, loadMore,disabled = false }:LoadMoreProps) => {
  return (
    <div>
      <button className='btn btn-secondary me-2' onClick={onClick} disabled={disabled}>
        {loadMore}
      </button>
    </div>
  );
};

export default LoadMore;