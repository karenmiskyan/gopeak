import {IconRoutArrow} from "shared/icons/common-icons";
import Link from "next/link";

interface RoutingPathPropItems {
    path: string;
    text: string;
}

interface RoutingPathProps {
    paths: RoutingPathPropItems[];
}

const RoutingPath = ({paths}: RoutingPathProps) => {
    const length = paths.length;
    const hasBlog = paths.some(item => item.text === "Blog");

    return (
        <div className={`${hasBlog ? 'class-blog' : ''}`}>
            <div className="t-25-px basic-container-lg routing-navigation">
                {paths.map((linkObject, i) => (
                    <Link key={i} className="text-color-routing-path text-xxs me-8" href={linkObject.path}>
                        {linkObject.text}
                        {length !== i + 1 && <IconRoutArrow className="ms-5"/>}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RoutingPath;
