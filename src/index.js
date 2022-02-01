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
        const title = document.createElement("div");
        title.textContent = "Burger Shop";
        title.setAttribute("id", "title");
        homeContainer.appendChild(title);

        const summary = document.createElement("div");
        summary.textContent = `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Integer venenatis ornare dolor vitae aliquet.
    Curabitur vestibulum posuere urna, pulvinar tempus lacus cursus at.
    Pellentesque purus nisi, porta et nulla eget, hendrerit
    accumsan ligula. Sed at turpis porttitor, egestas lacus ac,
    fringilla tellus.`;
        summary.setAttribute("id", "sum");
        homeContainer.appendChild(summary);

        const menu1 = document.createElement("div");
        menu1.classList.add("menu-item");
        menu1.setAttribute("id", "menu1");
        menu1.textContent = "fill";
        homeContainer.appendChild(menu1);

        const menu2 = document.createElement("div");
        menu2.classList.add("menu-item");
        menu2.setAttribute("id", "menu2");
        menu2.textContent = "fill";
        homeContainer.appendChild(menu2);

        const menu3 = document.createElement("div");
        menu3.classList.add("menu-item");
        menu3.setAttribute("id", "menu3");
        menu3.textContent = "fill";
        homeContainer.appendChild(menu3);

        const location = document.createElement("div");
        location.setAttribute("id", "location");
        location.textContent = "123 Sesame Street";
        homeContainer.appendChild(location);

        const hours = document.createElement("div");
        hours.setAttribute("id", "hours");
        hours.textContent = `Sunday: 10am - 10pm Saturday: 9am - 10pm
        Monday-Friday: 9am - 10pm Hours subject to change on holidays`;
        homeContainer.appendChild(hours);
        return homeContainer;
    }
    const homeContainer = createHome();

    const footer = document.createElement("div");
    footer.classList.add("footer");
    const footName = document.createElement("div");
    footName.textContent = "Brandon Chu";
    const footYear = document.createElement("div")
    footYear.textContent = "2022"
    const credit = document.createElement("div")
    credit.textContent = "The Odin Project"
    footer.appendChild(footYear)
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
        const menuTitle = document.createElement("div");
        menuTitle.textContent = "Menu";
        menuTitle.classList.add("title");
        menuContainer.appendChild(menuTitle);

        const burgName1 = document.createElement("div");
        burgName1.textContent = "Burger 1";
        burgName1.classList.add("food-name");
        const burgImg1 = document.createElement("img");
        burgImg1.src = "../dist/1.jpg";
        burgImg1.classList.add("food-img");
        const menuItem1 = document.createElement("div");
        menuItem1.classList.add("menu-item");
        menuItem1.appendChild(burgName1);
        menuItem1.appendChild(burgImg1);
        menuContainer.appendChild(menuItem1);

        const burgName2 = document.createElement("div");
        burgName2.textContent = "Burger 2";
        burgName2.classList.add("food-name");
        const burgImg2 = document.createElement("img");
        burgImg2.src = "../dist/2.jpg";
        burgImg2.classList.add("food-img");
        const menuItem2 = document.createElement("div");
        menuItem2.classList.add("menu-item");
        menuItem2.appendChild(burgName2);
        menuItem2.appendChild(burgImg2);
        menuContainer.appendChild(menuItem2);

        const burgName3 = document.createElement("div");
        burgName3.textContent = "Burger 3";
        burgName3.classList.add("food-name");
        const burgImg3 = document.createElement("img");
        burgImg3.src = "../dist/3.jpg";
        burgImg3.classList.add("food-img");
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
        contactTitle.classList.add("title");
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
    homeBtn.addEventListener("click", () => {
        textCont.removeChild(activePage);
        frontPage.createHome();
        textCont.appendChild(frontPage.homeContainer);
        activePage = frontPage.homeContainer;
    });
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        textCont.removeChild(activePage);
        menu.createMenu();
        textCont.appendChild(menu.menuContainer);
        activePage = menu.menuContainer;
    });
    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener("click", () => {
        textCont.removeChild(activePage);
        contact.createContact();
        activePage = contact.contactContainer;
        textCont.appendChild(contact.contactContainer);
    });
    return {
        activePage,
        content,
        textCont,
    };
})();
