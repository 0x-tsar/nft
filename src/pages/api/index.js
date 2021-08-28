// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nfts = {
  0: {
    title: "Asset Metadata",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Identifies the asset to which this NFT represents",
      },
      description: {
        type: "string",
        description: "Describes the asset to which this NFT represents",
      },
      image: {
        type: "string",
        description: "https://sleepy-fortress-10819.herokuapp.com",
      },
    },
  },
  1: {
    title: "Asset Metadata 22222222222",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Identifies the asset to which this NFT represents",
      },
      description: {
        type: "string",
        description: "Describes the asset to which this NFT represents",
      },
      image: {
        type: "string",
        description: "https://sleepy-fortress-10819.herokuapp.com",
        // "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",
      },
    },
  },
};

export default (req, res) => {
  res.status(200).json({ nfts });
};
