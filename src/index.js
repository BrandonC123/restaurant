const frontPage = (() => {
    const header = document.createElement("div");
    header.classList.add("header");

    const home = document.createElement("div");
    home.textContent = "Home";
    home.classList.add("tabs");

    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.classList.add("tabs");

    const contact = document.createElement("div");
    contact.textContent = "Contact";
    contact.classList.add("tabs");

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    const textCont = document.createElement("div");
    textCont.classList.add("text-container");

    const title = document.createElement("div");
    title.textContent = "Burger Shop";
    title.setAttribute("id", "title");

    const summary = document.createElement("div");
    summary.textContent = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Integer venenatis ornare dolor vitae aliquet. 
    Curabitur vestibulum posuere urna, pulvinar tempus lacus cursus at.
    Pellentesque purus nisi, porta et nulla eget, hendrerit
    accumsan ligula. Sed at turpis porttitor, egestas lacus ac,
    fringilla tellus.`;
    summary.setAttribute("id", "sum");

    const menu1 = document.createElement("div");
    menu1.classList.add("menu-item");
    menu1.setAttribute("id", "menu1");
    menu1.textContent = "fill";

    const menu2 = document.createElement("div");
    menu2.classList.add("menu-item");
    menu2.setAttribute("id", "menu2");
    menu2.textContent = "fill";

    const menu3 = document.createElement("div");
    menu3.classList.add("menu-item");
    menu3.setAttribute("id", "menu3");
    menu3.textContent = "fill";

    const location = document.createElement("div");
    location.setAttribute("id", "location");
    location.textContent = "123 Sesame Street";

    const hours = document.createElement("div");
    hours.setAttribute("id", "hours");
    hours.textContent = `Sunday: 10am - 10pm Saturday: 9am - 10pm
    Monday-Friday: 9am - 10pm Hours subject to change on holidays`;

    textCont.appendChild(title);
    textCont.appendChild(summary);
    textCont.appendChild(menu1);
    textCont.appendChild(menu2);
    textCont.appendChild(menu3);
    textCont.appendChild(location);
    textCont.appendChild(hours);

    const content = document.getElementById("content");
    content.appendChild(header);
    content.appendChild(textCont);
    console.log("T")
})();
