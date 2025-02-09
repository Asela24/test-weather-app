export const getGeolocation = (): Promise<{ lat: number; lon: number }> => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ lat: latitude, lon: longitude });
          },
          () => {
            reject("Необходимо разрешить доступ к геолокации");
          }
        );
      } else {
        reject("Геолокация не поддерживается бразуером");
      }
    });
  };