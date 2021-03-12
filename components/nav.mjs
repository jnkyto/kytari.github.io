export const NavLinks = (data) => {
    return data.map(links => `
    <li class="nav-item">
        <a class="nav-link" href="#">${links.name}</a>
    </li>
    `).join('')
}

export const Nav = (content, logo="../pf.jpg") => {
    return `
    <div class="collapse" id="Test">
        <div class="bg-dark">
        <h5 class="txt-wyt">Testing</h5>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#" type="button" data-toggle="collapse" data-target="Test" aria-controls="Test" aria-expanded="false" aria-label="Toggle navigation">
            <img src=${logo} width="30" height="30" alt="" loading="lazy">
        </a>
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggle-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                ${content}
            </div>
        </div>
    </div>
    </nav>`
}

export const homepages = [
    {
        name: 'Home',
        url: "/",
        icon: "",
        data: "",
    },
    {
        name: 'About',
        url: "/about",
        icon: "fa-user",
        data: "",
    },
    {
        name: 'Music',
        url: '/music',
        icon: "fa-th",
        data: "",
    }
]

const links = NavLinks(homepages)
export const NAV = Nav(links)