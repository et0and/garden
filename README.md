# 🌱 Garden

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fet0and%2Fgarden%2Ftree%2Fmain)

This project demonstrates how to display different 3D GLB models based on the user's geolocation, using the browser GeoLocation API and [model-viewer.js](model-viewer.dev). When the user is within a specified range of the desired location, the corresponding 3D model will load and display. The models can be viewed in both the 3D viewer and the AR mode.

## Features

- Load and display different 3D GLB models based on the user's geolocation
- Set custom scale for each 3D model
- View models in both the 3D viewer and the AR mode
- Show an alert when the user is not close enough to any of the desired locations to load the 3D models

## Development

1. Clone or download this repository `git clone https://github.com/et0and/garden.git`
2. Open the `index.html` file in a modern web browser that supports WebGL and AR features (e.g., Mozilla Firefox, Google Chrome).
3. Grant the browser permission to access your location.
4. If your location is within the specified range of a desired location, the corresponding 3D model will load and display. Otherwise, an alert will inform you that you are not close enough to any of the desired locations to load the 3D models.

## Customization

To add more models or modify the existing ones, open the `index.html` file and update the `models` array with the desired model files, latitudes, longitudes, and scales.

For example:

```
const models = [
    {
        src: 'model-one.glb',
        latitude: 12.9715987,
        longitude: 77.5945627,
        scale: '2 2 2'
    },
    {
        src: 'model-two.glb',
        latitude: 12.9655987,
        longitude: 77.5895627,
        scale: '1.5 1.5 1.5'
    }
];
```

This project is released under the MIT License. See the LICENSE file for more information.
