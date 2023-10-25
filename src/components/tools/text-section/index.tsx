import { Box, Chip, Typography } from "@mui/material";

const TextSection: React.FC<any> = ({ icon, label, value }) => {
  return (
    <Box>
      <Chip
        icon={icon}
        size="small"
        variant="outlined"
        sx={{ border: "none" }}
        label={`${label}: `}
      />
      <Typography variant="h6" gutterBottom>
        {value}
      </Typography>
    </Box>
  );
};

export default TextSection;
