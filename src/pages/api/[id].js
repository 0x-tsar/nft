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
        description:
          "https://fernwehrunway.com/wp-content/uploads/2020/11/IMG_20190429_184254-01-scaled.jpeg",
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
        description: "https://info.ehl.edu/hubfs/swiss-ski-resort-1.jpeg",
        // "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",
      },
    },
  },
};

export default (req, res) => {
  const id = req.query.id;
  // console.log(nfts[id]);
  if (nfts[id]) {
    res.status(200).json(nfts[id]);
  } else {
    res.status(400).json("Data not found");
  }
};
