const cloudinary = require("cloudinary");

cloudinary.config({ 
    cloud_name: 'djkoevvlt',
    api_key: '447753333382337',
    api_secret: '8X1iDnmFAiP121BbZGUa_V799IE',
    secure: true,
  });
  const cloudinaryUploadImg = async (fileToUploads) => {
    return new Promise((resolve) => {
      cloudinary.uploader.upload(fileToUploads, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id: result.asset_id, 
            public_id: result.public_id,
          }, 
          {
            resource_type: "auto",
          }
        );
      });
    });
  };
  const cloudinaryDeleteImg = async (fileToDelete) => {
    return new Promise((resolve) => {
      cloudinary.uploader.destroy(fileToDelete, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      });
    });
  };
  
  module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };