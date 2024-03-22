import React from 'react'
import ClipLoader from "react-spinners/CircleLoader"

const override = {
  display: "block",
  margin: "100px auto"
}

// Each loader accepts a loading prop as a boolean. The loader will render null if loading is false.
const Spinner = ( {loading} ) => {
  return (
    <ClipLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
      />
  )
}

export default Spinner