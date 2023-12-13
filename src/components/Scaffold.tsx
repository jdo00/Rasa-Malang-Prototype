import { margin } from "@mui/system";
import { ReactNode } from "react";

export type ScaffoldProps = {
    header: ReactNode;
    children: ReactNode;
};

export const Scaffold = (props: ScaffoldProps) => {
    return (
        <div>
            <div>{props.header}</div>
            <div style={{marginLeft: "1rem", marginRight:"1rem"}}>
                <div>{props.children}</div>
            </div>
        </div>
    );
};