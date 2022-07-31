import styles from "./styles.module.scss";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <h3>PROFILE</h3>
      <div className={styles.profileInfo}>
        <div>
          <p>Will Apolinário</p>
        </div>
        <div>
          <p>Brazilian</p>
        </div>
        <div>
          <a
            href="https://github.com/apolimax"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/apolimax
          </a>
        </div>
      </div>
      <p>
        Hi my name is Will, <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
        labore dolorum porro est nihil quos rem iste quaerat earum incidunt,
        corporis, iure laborum consectetur magni. Aut in esse vel quaerat alias.
        Cum maxime fugiat, laboriosam minus in fugit totam rem.
      </p>
    </div>
  );
}
