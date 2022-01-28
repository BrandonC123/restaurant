const setup = (() => {
    let activePage;
    frontPage();
    const homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", () => {});
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        menuPage();
    });
    const contactBtn = document.getElementById("contact");
    homeBtn.addEventListener("click", () => {});
    const textCont = document.createElement("div");
    textCont.classList.add("text-container");
    return {
        activePage,
        textCont,
    };
})();

function frontPage() {
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

    // const title = document.createElement("div");
    // title.textContent = "Burger Shop";
    // title.setAttribute("id", "title");

    // const summary = document.createElement("div");
    // summary.textContent = `Lorem ipsum dolor sit amet, consectetur
    // adipiscing elit. Integer venenatis ornare dolor vitae aliquet.
    // Curabitur vestibulum posuere urna, pulvinar tempus lacus cursus at.
    // Pellentesque purus nisi, porta et nulla eget, hendrerit
    // accumsan ligula. Sed at turpis porttitor, egestas lacus ac,
    // fringilla tellus.`;
    // summary.setAttribute("id", "sum");

    // const menu1 = document.createElement("div");
    // menu1.classList.add("menu-item");
    // menu1.setAttribute("id", "menu1");
    // menu1.textContent = "fill";

    // const menu2 = document.createElement("div");
    // menu2.classList.add("menu-item");
    // menu2.setAttribute("id", "menu2");
    // menu2.textContent = "fill";

    // const menu3 = document.createElement("div");
    // menu3.classList.add("menu-item");
    // menu3.setAttribute("id", "menu3");
    // menu3.textContent = "fill";

    // const location = document.createElement("div");
    // location.setAttribute("id", "location");
    // location.textContent = "123 Sesame Street";

    // const hours = document.createElement("div");
    // hours.setAttribute("id", "hours");
    // hours.textContent = `Sunday: 10am - 10pm Saturday: 9am - 10pm
    // Monday-Friday: 9am - 10pm Hours subject to change on holidays`;

    // textCont.appendChild(title);
    // textCont.appendChild(summary);
    // textCont.appendChild(menu1);
    // textCont.appendChild(menu2);
    // textCont.appendChild(menu3);
    // textCont.appendChild(location);
    // textCont.appendChild(hours);

    const content = document.getElementById("content");
    content.appendChild(header);
    // content.appendChild(textCont);
}

function menuPage() {
    const menuTitle = document.createElement("div");
    menuTitle.textContent = "Menu";
    menuTitle.classList.add("title");
    setup.textCont.appendChild(menuTitle);

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
    setup.textCont.appendChild(menuItem1);

    const burgName2 = document.createElement("div");
    burgName2.textContent = "Burger 2";
    burgName2.classList.add("food-name");
    const burgImg2 = document.createElement("img");
    burgImg2.src = "../dist/2.jpg";
    burgImg2.classList.add("food-img");
    setup.textCont.appendChild();
    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("menu-item");
    menuItem2.appendChild(burgName2);
    menuItem2.appendChild(burgImg2);
    setup.textCont.appendChild(menuItem2);

    const burgName3 = document.createElement("div");
    burgName3.textContent = "Burger 3";
    burgName3.classList.add("food-name");
    const burgImg3 = document.createElement("img");
    burgImg3.src = "../dist/3.jpg";
    burgImg3.classList.add("food-img");
    setup.textCont.appendChild();
    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("menu-item");
    menuItem3.appendChild(burgName3);
    menuItem3.appendChild(burgImg3);
    setup.textCont.appendChild(menuItem3);
}
