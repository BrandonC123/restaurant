const frontPage = (() => {
    const header = document.createElement("div");
    header.classList.add("header");

    const home = document.createElement("div");
    home.textContent = "Home";
    home.setAttribute("id", "home");
    home.classList.add("tabs");

    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.setAttribute("id", "menu");
    menu.classList.add("tabs");

    const contact = document.createElement("div");
    contact.textContent = "Contact";
    contact.setAttribute("id", "contact");
    contact.classList.add("tabs");

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    function createHome() {
        const homeContainer = document.createElement("div");
        homeContainer.classList.add("home-container");
        const title = document.createElement("div");
        const homeTitle = document.createElement("div");
        homeTitle.textContent = "Burger Shop";
        homeTitle.setAttribute("id", "title");
        title.appendChild(homeTitle);
        homeContainer.appendChild(title);

        const summary = document.createElement("div");
        summary.textContent = `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Integer venenatis ornare dolor vitae aliquet.
    Curabitur vestibulum posuere urna, pulvinar tempus lacus cursus at.
    Pellentesque purus nisi, porta et nulla eget, `;
        summary.setAttribute("id", "sum");
        homeContainer.appendChild(summary);

        const popItem1 = document.createElement("div");
        popItem1.classList.add("popular-item");
        popItem1.setAttribute("id", "popItem1");
        popItem1.textContent = "fill";
        homeContainer.appendChild(popItem1);

        const popItem2 = document.createElement("div");
        popItem2.classList.add("popular-item");
        popItem2.setAttribute("id", "popItem2");
        popItem2.textContent = "fill";
        homeContainer.appendChild(popItem2);

        const popItem3 = document.createElement("div");
        popItem3.classList.add("popular-item");
        popItem3.setAttribute("id", "popItem3");
        popItem3.textContent = "fill";
        homeContainer.appendChild(popItem3);

        const location = document.createElement("div");
        location.setAttribute("id", "location");
        location.textContent = "Location: 123 Sesame Street";
        homeContainer.appendChild(location);

        const hours = document.createElement("div");
        hours.setAttribute("id", "hours");
        const hours1 = document.createElement("div");
        const hours2 = document.createElement("div");
        const hours3 = document.createElement("div");
        hours.textContent = "Hours:";
        hours1.textContent = "Sunday: 10am - 10pm";
        hours2.textContent = "Saturday: 9am - 10pm";
        hours3.textContent = "Monday-Friday: 9am - 9pm";
        hours.appendChild(hours1);
        hours.appendChild(hours2);
        hours.appendChild(hours3);
        homeContainer.appendChild(hours);
        return homeContainer;
    }
    const homeContainer = createHome();

    const footer = document.createElement("div");
    footer.classList.add("footer");
    const footName = document.createElement("div");
    footName.textContent = "Brandon Chu";
    const footYear = document.createElement("div");
    footYear.textContent = "2022";
    const credit = document.createElement("div");
    credit.textContent = "The Odin Project";
    footer.appendChild(footYear);
    footer.appendChild(footName);
    footer.appendChild(credit);
    return {
        createHome,
        header,
        homeContainer,
        footer,
    };
})();

const menu = (() => {
    function createMenu() {
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        const menuTitle = document.createElement("div");
        menuTitle.textContent = "Menu";
        menuTitle.setAttribute("id", "title");
        menuContainer.appendChild(menuTitle);

        const burgName1 = document.createElement("div");
        burgName1.textContent = "Burger 1";
        burgName1.classList.add("food-name");
        const burgImg1 = document.createElement("div");
        burgImg1.setAttribute("id", "menu-item1")
        const menuItem1 = document.createElement("div");
        menuItem1.classList.add("menu-item");
        menuItem1.appendChild(burgName1);
        menuItem1.appendChild(burgImg1);
        menuContainer.appendChild(menuItem1);

        const burgName2 = document.createElement("div");
        burgName2.textContent = "Burger 2";
        burgName2.classList.add("food-name");
        const burgImg2 = document.createElement("div");
        burgImg2.setAttribute("id", "menu-item2")
        const menuItem2 = document.createElement("div");
        menuItem2.classList.add("menu-item");
        menuItem2.appendChild(burgName2);
        menuItem2.appendChild(burgImg2);
        menuContainer.appendChild(menuItem2);

        const burgName3 = document.createElement("div");
        burgName3.textContent = "Burger 3";
        burgName3.classList.add("food-name");
        const burgImg3 = document.createElement("div");
        burgImg3.setAttribute("id", "menu-item3")
        const menuItem3 = document.createElement("div");
        menuItem3.classList.add("menu-item");
        menuItem3.appendChild(burgName3);
        menuItem3.appendChild(burgImg3);
        menuContainer.appendChild(menuItem3);
        return menuContainer;
    }
    const menuContainer = createMenu();
    return {
        createMenu,
        menuContainer,
    };
})();

const contact = (() => {
    function createContact() {
        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container");
        const contactTitle = document.createElement("div");
        contactTitle.setAttribute("id", "title");
        contactTitle.textContent = "Contact";
        contactContainer.appendChild(contactTitle);

        const contactText = document.createElement("div");
        contactText.classList.add("contact-cont");

        const number = document.createElement("p");
        number.textContent = "Phone Number: Insert Number";
        const email = document.createElement("p");
        email.textContent = "Email: realemail@gmail.com";
        const location = document.createElement("p");
        location.textContent = "Location: 123 Sesame Street";

        contactText.appendChild(number);
        contactText.appendChild(email);
        contactText.appendChild(location);
        contactContainer.appendChild(contactText);
        return contactContainer;
    }
    const contactContainer = createContact();
    return {
        createContact,
        contactContainer,
    };
})();

const setup = (() => {
    let activePage;
    let activeBtn;
    const content = document.getElementById("content");
    const textCont = document.createElement("div");
    const topHalf = document.createElement("div");
    topHalf.classList.add("top-half");
    textCont.classList.add("text-container");

    frontPage.createHome();
    topHalf.appendChild(frontPage.header);
    textCont.appendChild(frontPage.homeContainer);
    topHalf.appendChild(textCont);

    content.appendChild(topHalf);
    content.appendChild(frontPage.footer);
    activePage = frontPage.homeContainer;
    const homeBtn = document.getElementById("home");
    homeBtn.classList.add("pressed");
    activeBtn = homeBtn;
    homeBtn.addEventListener("click", () => {
        activeBtn.classList.remove("pressed");
        textCont.removeChild(activePage);
        frontPage.createHome();
        textCont.appendChild(frontPage.homeContainer);
        activePage = frontPage.homeContainer;
        homeBtn.classList.add("pressed");
        activeBtn = homeBtn;
    });
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        activeBtn.classList.remove("pressed");
        textCont.removeChild(activePage);
        menu.createMenu();
        textCont.appendChild(menu.menuContainer);
        activePage = menu.menuContainer;
        menuBtn.classList.add("pressed");
        activeBtn = menuBtn;
    });
    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener("click", () => {
        activeBtn.classList.remove("pressed");
        textCont.removeChild(activePage);
        contact.createContact();
        textCont.appendChild(contact.contactContainer);
        activePage = contact.contactContainer;
        contactBtn.classList.add("pressed");
        activeBtn = contactBtn;
    });
    return {
        activePage,
        content,
        textCont,
    };
})();
