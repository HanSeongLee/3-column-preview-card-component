import React from "react";
import styles from './style.module.scss';

const PreviewCard = ({ color, icon, title, description }) => {
    return (
        <div className={styles.previewCard}
             style={{
                 background: color,
             }}
        >
            {icon && (
                <img className={styles.icon}
                     src={icon}
                     alt={title}
                />
            )}
            <h1 className={styles.title}>
                {title}
            </h1>
            <p className={styles.description}>
                {description}
            </p>
            <button className={styles.learnMoreButton}
                    style={{
                        color: color,
                    }}
            >
                Learn More
            </button>
        </div>
    );
};

export default PreviewCard;
