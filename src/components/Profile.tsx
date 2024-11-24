import Image from "next/image";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { Person } from "@/app/page";

export type LocalPerson = {
  name: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string | null;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created: string;
  edited: string;
  url: string;
};

type ProfileProps = {
  id: string;
  info: Person;
};

export const Profile = ({ id, info }: ProfileProps) => {
  const person = info as LocalPerson;
  return (
    <Card sx={{ bgcolor: "#333", width: 200, height: 400 }}>
      <CardContent sx={{ color: "white" }}>
        <Avatar sx={{ height: 170, width: 170 }}>
          <Image
            style={{ marginTop: "60px" }}
            width={170}
            height={250}
            src={`/characters/${id.slice(id.indexOf("/") + 1)}.jpg`}
            alt={person.name}
          />
        </Avatar>
        <Typography sx={{ mt: 6, fontSize: 18 }}>{person.name}</Typography>
        <Typography sx={{ fontSize: 16, color: "lightgray" }}>
          Eye color: {person.eye_color}
        </Typography>
        <Typography sx={{ fontSize: 16, color: "lightgray" }}>
          Height: {person.height}cm
        </Typography>
        <Typography sx={{ fontSize: 16, color: "lightgray" }}>
          Weight: {person.mass}kg
        </Typography>
      </CardContent>
    </Card>
  );
};
