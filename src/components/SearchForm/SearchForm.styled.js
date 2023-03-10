import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const StyledInput = styled(TextField)({
  "& .MuiFilledInput-root": {
    border: "1px solid #red",
    borderRadius: 50,
    paddingBottom: "15px",
    backgroundColor: "#F3F3F3",
    paddingLeft: "20px",
    marginLeft: "10px",
  },

  "& ::placeholder": {
    fontSize: "17px",
    fontWeight: "600",
  },
});
