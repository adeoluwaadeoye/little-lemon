// Header.js
import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Reservation from "./Reservation";
import '../../assets/styles/main.css';
import './Header.css';
import './Reservation.css';

const Header = ({ cartCount, toggleCart }) => {
    const headerRef = useRef(null);
    // const prevScrollY = useRef(0);
    const [isReservationActive, setIsReservationActive] = useState(false);

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
            // For the Reservation link, toggle the reservation overlay
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
    };

    const handleReservationClick = () => {
        setIsReservationActive(!isReservationActive);
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
        >
            <Box color="white" maxWidth="1200px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    alignItems="center"
                >
                    <nav>
                        {/* ... (unchanged code) */}
                        <img
                            height={50}
                            width={250}
                            src={require('../../assets/images/logo.png')}
                            alt='logo'
                        />

                    </nav>
                    <nav>
                        <HStack spacing={8} textDecoration={"none"} textTransform={"capitalize"}>
                            <div className={`links-control section-title ${isReservationActive ? 'disabled' : ''}`}>
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
                    <Box>
                        {/* ... (unchanged code) */}
                        <Box>
                            <FontAwesomeIcon
                                icon={faShoppingBag}
                                size="3x"
                                onClick={toggleCart}
                                style={{ cursor: "pointer", color: "#495e57" }}
                            />
                            <span className="cart-count">{cartCount}</span>
                        </Box>
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
