import { Container } from "./styles";
import { useTheme } from "styled-components";

export function VerticalLines() {

    const theme = useTheme();

    const lineColors = [
        { id: "yellow", color: theme.COLORS.YELLOW },
        { id: "orange", color: theme.COLORS.ORANGE },
        { id: "salmon", color: theme.COLORS.SALMON },
        { id: "purple", color: theme.COLORS.PURPLE },
    ];


    return(
        <Container>
            {
                lineColors.map(line => (
                    <div
                        key={line.id}
                        id={line.id}
                        style={{ borderColor: line.color }}
                    />
                ))
            }
        </Container>
    );
}