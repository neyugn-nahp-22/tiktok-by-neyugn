import * as httpRequest from "~/utils/httpRequest";

export const getFollowingUser = async ({ seeMore, perPage }) => {
  try {
    const res = await httpRequest.get("users/suggested", {
      params: {
        page: seeMore,
        per_page: perPage,  
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
