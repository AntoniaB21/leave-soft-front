import { Burger, Header, MediaQuery, useMantineTheme } from "@mantine/core";
import Logo from "../Logo";

export const CustomHeader = ({
    opened,
    setOpened
  }: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const theme = useMantineTheme();

    return (
        <Header height={70} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size={30}
            color= "#1F66A8"
            mr="xl"
            />
        </MediaQuery>

        <Logo/>
        </div>
        </Header>
    )
};
