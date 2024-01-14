// Header.js
import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from 'react-icons/fa';
import Reservation from "./Reservation";
import '../../assets/styles/main.css';
import './Header.css';
import './Reservation.css';

const Header = ({ cartCount, toggleCart }) => {
    const headerRef = useRef(null);
    const [isReservationActive, setIsReservationActive] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // ... (unchanged code)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (anchor) => (e) => {
        e.preventDefault();
        const id = `${anchor}-section`;
        const element = document.getElementById(id);

        if (anchor.toLowerCase() === "reservation") {
            handleReservationClick();
            return;
        }

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        const path = `/${anchor.toLowerCase()}`;
        window.history.pushState({ path }, "", path);

        // Close navigation on smaller screens
        if (window.innerWidth <= 900) {
            setIsNavOpen(false);
        }
    };

    const handleReservationClick = () => {
        setIsReservationActive(!isReservationActive);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <Box
            ref={headerRef}
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".5s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#ffffff"
            zIndex={1000}
            boxShadow={"4px 4px 8px #fff"}
        >
            <Box color="white" maxWidth="1200px" margin="0 auto" className="header-control">
                <HStack
                    px={16}
                    py={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    <nav>
                        <img
                            height={50}
                            width={230}
                            src={require('../../assets/images/logo.png')}
                            alt='logo'
                        />
                    </nav>
                    <nav>
                        <HStack spacing={8} textDecoration={"none"} textTransform={"capitalize"}>
                            <div className={`links-control section-title  ${isNavOpen ? 'nav-open' : ''} ${isReservationActive ? 'disabled' : ''}`}>
                                <Link href="/home" onClick={handleClick("home")}>
                                    Home
                                </Link>
                                <Link href="/about" onClick={handleClick("about")}>
                                    About
                                </Link>
                                <Link href="/menu" onClick={handleClick("menu")}>
                                    Menu
                                </Link>
                                <Link href="/reservation" onClick={handleClick("reservation")}>
                                    Reservation
                                </Link>
                                <Link href="/order" onClick={handleClick("order")}>
                                    Order online
                                </Link>
                                <Link href="/login" onClick={handleClick("login")}>
                                    Login
                                </Link>
                            </div>
                        </HStack>
                    </nav>
                    <nav>

                        <div className="icon-container hamburger" onClick={toggleNav}>
                            {isNavOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
                        </div>
                    </nav>
                    <Box>
                        <FontAwesomeIcon
                            icon={faShoppingBag}
                            size="3x"
                            onClick={toggleCart}
                            style={{ cursor: "pointer", color: "#495e57" }}
                        />
                        <span className="cart-count">{cartCount}</span>
                    </Box>
                </HStack>
            </Box>

            {/* Reservation Overlay */}
            {isReservationActive && (
                <Reservation onClose={handleReservationClick} />
            )}
        </Box>
    );
};

export default Header;
