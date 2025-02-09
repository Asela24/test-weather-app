export const celsiusToFahrenheit = (celsius?: number): number | undefined => {
  return celsius ? ((celsius * 9) / 5 + 32) : undefined
};
