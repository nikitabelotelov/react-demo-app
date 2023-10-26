import classNames from "classnames";
import { Person } from "../../store/types";
import styles from "./personCard.module.scss";
import { OnlineIndicator } from "./onlineIndicator";
import { Sex } from "../../pages/search/formOptions";
import womanDefaultPhoto from "../../static/images/no_photo_woman.jpg";
import manDefaultPhoto from "../../static/images/no_photo_man.jpg";
import { getTimeAgoString } from "./activityHelper";

type TProps = {
  item: Person;
};

function getPhotoUrl(person: Person) {
  if (person.photoUrl) {
    return person.photoUrl;
  }
  if (`${person.sex}` === Sex["Женщина"]) {
    return womanDefaultPhoto;
  }
  return manDefaultPhoto;
}

export function PersonCard(props: TProps) {
  const hasRating = props.item.rating > 0;
  const rating = hasRating ? props.item.rating : "new";
  const moreTopics =
    props.item.subjectsCount > 1
      ? `и еще ${props.item.subjectsCount - 1} темы`
      : ``;
  const isOnline = props.item.onlineStatus === 2;
  const photoUrl = getPhotoUrl(props.item);
  const activityString = getTimeAgoString(
    new Date(props.item.lastActivityTime),
    new Date(),
    `${props.item.sex}`
  );
  return (
    <div key={props.item.userId} className={styles.root}>
      <div className={styles.imageContainer}>
        <img
          className={styles.resultPhoto}
          src={photoUrl}
          alt={`${props.item.name}`}
        />
        <div className={styles.rating}>
          <div className={styles.ratingLabel}>рейтинг</div>
          <div
            className={classNames(styles.ratingValue, {
              [styles.hasRating]: hasRating,
            })}
          >
            {rating}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          {props.item.name}, {props.item.age} {isOnline && <OnlineIndicator />}
        </div>
        <div className={styles.topics}>
          <span className={styles.defaultTopic}>
            {props.item.defaultSubjectName}
          </span>
          &nbsp;<span className={styles.moreTopics}>{moreTopics}</span>
        </div>
        <div className={styles.activity}>{activityString}</div>
      </div>
    </div>
  );
}
