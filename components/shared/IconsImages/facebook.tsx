interface FacebookSvgIconProps {
  width?: number;
  height?: number;
}

const FacebookSvgIcon = ({ width = 32, height = 32 }:FacebookSvgIconProps) => (
  <svg width={width} height={height} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Frame 6411">
      <g id="Group 6407">
        <circle id="Ellipse 44" cx="21.1807" cy="21.0361" r="21.0361" fill="#EFEFF1"/>
      </g>
      <path id="Vector" d="M26.1774 12H23.4411C22.2317 12 21.0717 12.4698 20.2165 13.306C19.3613 14.1422 18.8808 15.2764 18.8808 16.459V19.1344H16.1446V22.7016H18.8808V29.8361H22.5291V22.7016H25.2653L26.1774 19.1344H22.5291V16.459C22.5291 16.2225 22.6252 15.9957 22.7962 15.8284C22.9673 15.6612 23.1993 15.5672 23.4411 15.5672H26.1774V12Z" fill="#6374FF"/>
    </g>
  </svg>
)

export default FacebookSvgIcon;