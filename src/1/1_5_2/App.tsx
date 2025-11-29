// 1_5_2 Adjust the image size based on a prop - Updated Avatar to request appropriate image size based on the prop value
import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
  const imageSize = size < 90 ? 's' : 'b';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "GregorioYZara",
      }}
    />
  );
}
