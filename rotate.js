const { Jimp } = require('jimp');

async function rotateImage() {
  try {
    const imagePath = './public/assets/hackathon winning.jpeg';
    const image = await Jimp.read(imagePath);
    // Rotate 90 degrees clockwise (or -90 to make horizontal). 
    // Usually vertical certificates are rotated -90 or 90 to be horizontal. 
    image.rotate(90);
    await image.write(imagePath);
    console.log('Image rotated successfully');
  } catch (error) {
    console.error('Error rotating image:', error);
  }
}

rotateImage();
