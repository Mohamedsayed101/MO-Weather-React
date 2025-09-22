import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Form Submitted:", formData);

    // reset after submit
    setFormData({ name: "", email: "", message: "" });
    alert("✅ Thanks for contacting us!");
  };

  return (
    <Container maxWidth="md" className="py-10">
      <Paper elevation={3} className="p-8 rounded-2xl shadow-lg">
        <Typography variant="h4" className="mb-6 text-center font-bold text-blue-600">
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box className="flex flex-col gap-5">
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              type="email"
              label="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ borderRadius: "12px" }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
