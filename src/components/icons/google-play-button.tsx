
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
      viewBox="0 0 135 40"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", height: "auto", maxWidth: "135px" }}
    >
      {/* Background */}
      <rect width="135" height="40" rx="5" fill={backgroundColor} />

      {/* Google Play logo */}
      <g transform="translate(12, 12)" fill={iconColor}>
        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
      </g>

      {/* Text */}
      <text x="40" y="16" fontFamily="Arial, sans-serif" fontSize="8" fill={textColor} fontWeight="normal">
        GET IT ON
      </text>
      <text x="40" y="30" fontFamily="Arial, sans-serif" fontSize="14" fill={textColor} fontWeight="bold">
        Google Play
      </text>
    </svg>
  );
};

export default GooglePlayButton;

    