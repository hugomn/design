export interface Color {
  // Primary colors
  primaryDarker?: string;
  primaryDark?: string;
  primary: string;
  primaryLight?: string;
  primaryLighter?: string;
  primaryLightest?: string;

  // Secondary colors
  secondaryDarker?: string;
  secondaryDark?: string;
  secondary: string;
  secondaryLight?: string;
  secondaryLighter?: string;
  secondaryLightest?: string;

  // Black and grays
  black?: string;
  grayDarker?: string;
  grayDark?: string;
  gray?: string;
  grayLight?: string;
  grayLighter?: string;
  grayLightest?: string;

  // Statuses colors
  statusError?: string;
  statusInfo?: string;
  statusSuccess?: string;
  statusWarning?: string;
}

export default interface Foundation { 
  color: Color
}