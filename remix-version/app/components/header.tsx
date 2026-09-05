import { Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";


export default function Header() {
    const [opened, { open: openPageTabs, close: closePageTabs }] = useDisclosure();

    return (
        <Group>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#work-experience">Work Experience</a></li>
                    <li id="contact-nav-menu"><a href="#contact-info">Contact</a></li>
                    <li><a href="">Resume</a></li>
                </ul>
                <Button id="hamburger-menu-icon" onClick={(event) => console.log("Hamburger button clicked")
                }>☰</Button>
            </nav>
        </Group>
    )



}