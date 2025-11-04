import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
    >
      Kembali
    </Button>
  );
};

export default Back;
