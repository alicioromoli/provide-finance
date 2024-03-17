import React from "react";
import { useEffect, useState, forwardRef } from "react";
import { TextField } from "@mui/material";

export const EmailInput = forwardRef(function EmailInput(props, ref) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [hasTriggerInput, setHasTriggerInput] = useState(false);

  useEffect(() => {
    if (hasTriggerInput) {
      if (email == "") {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
  }, [email, hasTriggerInput]);

  return (
    <TextField
      inputRef={ref}
      label="Email"
      onChange={(e) => setEmail(e.target.value)}
      required
      variant="outlined"
      color="secondary"
      onFocus={() => setHasTriggerInput(true)}
      type="email"
      sx={{ mb: 3 }}
      fullWidth
      value={email}
      error={emailError}
    />
  );
});

export default EmailInput;
