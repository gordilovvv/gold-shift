import { ICONS } from '@/config';

function VIcon({ name }) {
    const icon = ICONS[`../assets/icons/${name}.svg`];

    if (!icon)
        return null;

    // @ts-ignore
    return icon.default.render();
}

VIcon.props = {
    name: {
        type: String,
        required: true
    }
};

export default VIcon;