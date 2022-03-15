import axios from "axios";

export const fetchFeeds = async (orderData)  => {
    try {
          let res = await axios.get(`https://dwinnex.com/feed/`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
