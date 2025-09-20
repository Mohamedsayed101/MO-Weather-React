import TextField from "@mui/material/TextField";

export default function ApiKeyWeather() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField id="outlined-basic" label="API key" variant="outlined" />
      </div>
    </>
  );
}
