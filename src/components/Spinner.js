import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader';
import ClipLoader from "react-spinners/ClipLoader";

function Spinner({loading, other}) {
  return (
    <div className={`spinner ${other}`}>
      <ScaleLoader
        color={'#00B17B'}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
  )
}

export default Spinner