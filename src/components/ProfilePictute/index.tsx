import styles from './styles.module.scss'

export default function ProfilePicture() {
    return <div className={styles.profilePictureContainer}>
        <img className={styles.picture} src="/assets/photo.jpeg" alt="profile" />
    </div>
}