// BasicCard.jsx
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ city, date, temp, condition, icon, wind }) {
  return (
    <>
      <Card
        sx={{ minWidth: 375 }}
        className="shadow-lg rounded-xl text-center Card "
      >
        <CardContent>
          <Typography sx={{ marginBottom: "10px" }}>{date}</Typography>
          <Typography variant="h3" sx={{ marginBottom: "5px" }}>
            {city}
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: "1px" }}>
            {temp}°C
          </Typography>
          <div style={{
            width: "100%",
          }}>
            <img
              src={`https:${icon}`}
              alt="Icon"
              style={{
                margin: "0 auto",
              }}
            />
          </div>
          <Typography sx={{ mb: 1.5 }}>{condition}</Typography>
          <Typography sx={{ mb: 1.5 }}>💨 {wind} km/h</Typography>
        </CardContent>
      </Card>
    </>
  );
}
