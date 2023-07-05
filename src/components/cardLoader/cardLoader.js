import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={340}
    viewBox="0 0 300 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="178" rx="3" ry="3" width="213" height="10" /> 
    <rect x="7" y="211" rx="3" ry="3" width="200" height="10" /> 
    <rect x="7" y="195" rx="3" ry="3" width="250" height="10" /> 
    <rect x="6" y="0" rx="0" ry="0" width="257" height="166" /> 
    <rect x="7" y="230" rx="3" ry="3" width="240" height="5" /> 
    <rect x="7" y="240" rx="3" ry="3" width="240" height="5" /> 
    <rect x="7" y="250" rx="3" ry="3" width="240" height="5" /> 
    <rect x="7" y="260" rx="3" ry="3" width="240" height="5" /> 
    <rect x="7" y="270" rx="3" ry="3" width="240" height="5" /> 
    <rect x="7" y="280" rx="3" ry="3" width="240" height="5" />
  </ContentLoader>
)

export default CardLoader