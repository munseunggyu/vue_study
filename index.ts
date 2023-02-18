import { createConnection } from "./models/db";
import app from "./app";

createConnection();

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
