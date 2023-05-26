import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://diqztxuzmmbrawfyrvdr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpcXp0eHV6bW1icmF3ZnlydmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwOTkxOTksImV4cCI6MjAwMDY3NTE5OX0.gMSfkcvZRCSnMYHNwYZeE5B6Cd_DRxMnf-_HxThsFiI"
);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
