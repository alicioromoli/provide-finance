import React from "react";
import { useEffect, useState, forwardRef } from "react";
import { TextField } from "@mui/material";

export const PasswordInput = forwardRef(function EmailInput(props, ref) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [hasTriggerInput, setHasTriggerInput] = useState(false);

  useEffect(() => {
    if (hasTriggerInput) {
      if (password == "") {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  }, [password, hasTriggerInput]);

  return (
    <TextField
      inputRef={ref}
      label="Password"
      autoComplete="true"
      onChange={(e) => setPassword(e.target.value)}
      required
      variant="outlined"
      color="secondary"
      type="password"
      value={password}
      error={passwordError}
      onFocus={() => setHasTriggerInput(true)}
      fullWidth
      sx={{ mb: 3 }}
    />
  );
});

export default PasswordInput;
