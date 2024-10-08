interface LinkedinSvgIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const LinkedinSvgIcon = ({ width = 32, height = 32, color = '#EFEFF1' }:LinkedinSvgIconProps) => (
  <svg width={width} height={height} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21.0361" cy="21.0361" r="21.0361" fill={color}/>
    <g clipPath="url(#clip0_1076_4295)">
      <path d="M15.8774 29.8361H12V17.4284H15.8774V29.8361ZM13.9395 15.8774C12.867 15.8774 12 15.0081 12 13.9379C12 12.8678 12.8685 12 13.9395 12C15.0081 12 15.8774 12.8693 15.8774 13.9379C15.8774 15.0081 15.0081 15.8774 13.9395 15.8774ZM29.8361 29.8361H26.1083V23.3996C26.1083 22.0495 26.0827 20.3132 24.1704 20.3132C22.2294 20.3132 21.9308 21.7835 21.9308 23.3019V29.8361H18.2038V17.4198H21.7819V19.0103H21.8323C22.3302 18.0953 23.5469 17.1306 25.3615 17.1306C29.1381 17.1306 29.8361 19.5416 29.8361 22.676V29.8361Z" fill="#6374FF"/>
    </g>
    <defs>
      <clipPath id="clip0_1076_4295">
        <rect width="17.8361" height="17.8361" fill="white" transform="translate(12 12)"/>
      </clipPath>
    </defs>
  </svg>
)

export default LinkedinSvgIcon;