import VIcon from '../Icon/VIcon';
import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
    badge: string
}

function SectionTitle({ badge }: SectionTitleProps, { slots }) {
    return <h2 class={styles.title}>
        {slots.default()}
        <span>
            <VIcon name={badge} />
        </span>
    </h2>;
}

SectionTitle.props = {
    badge: String
};

export default SectionTitle;