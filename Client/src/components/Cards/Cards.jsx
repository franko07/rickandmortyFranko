import Card from "../Card/Card";
import Styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={Styles.divGeneral}>
      {characters.map(
        ({ id, name, species, gender, image, origin, status }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              origin={origin}
              status={status}
              onClose={() => props.onClose(id)}
            />
          );
        }
      )}
    </div>
  );
}
