import { Box } from "@mui/material";
import { SERVER_URL } from "../constants";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${SERVER_URL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
