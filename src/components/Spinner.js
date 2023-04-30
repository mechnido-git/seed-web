import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Spinner({loading}) {
  return (
    <div className="spinner">
      <ClipLoader
        color={'#006aff'}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
  )
}

export default Spinner