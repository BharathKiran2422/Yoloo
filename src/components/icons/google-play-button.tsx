import React from "react";

interface GooglePlayButtonProps {
  className?: string;  // optional CSS class
  darkMode?: boolean;  // toggle dark/light theme
}

const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({
  className = "",
  darkMode = true,
}) => {
  const backgroundColor = darkMode ? "#000" : "#fff";
  const iconColor = darkMode ? "#fff" : "#000";
  const textColor = iconColor;

  return (
    <svg
      viewBox="0 0 160 55"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        width: "180px",  // matches App Store button width
        height: "65px",  // same height for uniformity
      }}
    >
      {/* Background */}
      <rect width="160" height="55" rx="10" fill={backgroundColor} />

      {/* Enlarged Google Play icon */}
      <g transform="translate(20, 13) scale(1.6)" fill={iconColor}>
        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
      </g>

      {/* Text */}
      <text
        x="58"
        y="20"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill={textColor}
      >
        GET IT ON
      </text>
      <text
        x="58"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill={textColor}
      >
        Google Play
      </text>
    </svg>
  );
};

export default GooglePlayButton;
