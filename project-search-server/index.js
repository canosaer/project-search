const http = require('http')
const url  = require('url')

const hostname = 'localhost'
const port = 1337

const projectData = {
    categories: [
        {   name: "3D Modeling",
            tag: "3d",
        },
        {   name: "Animation",
            tag: "animation",
        },
        {   name: "API Usage",
            tag: "api",
        },
        {   name: "Corporate",
            tag: "corporate",
        },
        {   name: "Games",
            tag: "games",
        },
    ],
    projects: [
        {   name: "'O ia Poké",
            tag: "corporate",
            url: "https://poke.ericcanosa.com/",
            repo: "https://github.com/canosaer/poke",
            desc: "'O ia Poké is modern, professional-level restaurant site. This project takes responsiveness to the next level with CSS grid and elegant use of media query breakpoints. JavaScript plugins round out the interactivity of the site.",
        },
        {   name: "Dark Moon Ad",
            tag: "animation",
            url: "https://banner-ad.ericcanosa.com",
            repo: "https://github.com/canosaer/banner-ad",
            desc: "Dark Moon is a science fiction board game I've been developing for over 10 years. This animated banner ad is an example of the kind of marketing I'm excited to do once the game is launched.",
        },
        {   name: "Big Top",
            tag: "corporate",
            url: "https://big-top.ericcanosa.com",
            repo: "https://github.com/canosaer/big-top",
            desc: "Big Top is a Creative Circus themed agency site. I've created a meticulously responsive layout that relies on pseudoelements and absolute positioning for a variety of subtle decorations.",
        },
        {   name: "Circ",
            tag: "corporate",
            url: "https://circ.ericcanosa.com",
            repo: "https://github.com/canosaer/circ",
            desc: "Circ is a clean, simple site that looks great at every screen resolution. Elements respond to user interaction through hover state animations.",
        },
        {   name: "Checkpoint!",
            tag: "games",
            url: "https://checkpoint.ericcanosa.com",
            repo: "https://github.com/canosaer/checkpoint",
            desc: 'My take on the popular indie PC game "Papers, Please." In Checkpoint, players must examine the documents of people trying to enter a fictional Eastern European country at a border checkpoint and decide whether to approve or deny their entry.',
        },
        {   name: "Dark Moon Crowdfunder",
            tag: "games",
            url: "https://darkmoon.ericcanosa.com",
            repo: "https://github.com/canosaer/dark-moon",
            desc: "Dark Moon is a science fiction board game I've been developing for over 10 years. This project is a prototype of a crowdfunding site to launch the game.",
        },
        {   name: "Dice Roller",
            tag: "games",
            url: "https://dice-roller.ericcanosa.com",
            repo: "https://github.com/canosaer/dice-roller",
            desc: "I built the dice roller I'd want to use as a Dungeons and Dragons player. Allows the user to roll any number of dice with 4, 6, 8, 10, or 20 sides. Can also roll n-sided dice or impose bonuses or penalities to the roll.",
        },
        {   name: "Dread Asylum",
            tag: "games",
            url: "https://dread-asylum.ericcanosa.com",
            repo: "https://github.com/canosaer/dread-asylum",
            desc: "After a night out drinking taken a little too far, you are horrified to wake up in the basement of an insane asylum. Find the keys to escape before you lose your sanity! Features dynamic lighting and C# scripts written for Unity.",
        },
        {   name: "Enemy Space",
            tag: "games",
            url: "https://enemy-space.ericcanosa.com",
            repo: "https://github.com/canosaer/enemy-space-v2",
            desc: "You are on a mission to deliver intelligence for the Resistance. Get through the sector without being destroyed and you can turn the tide of the war! Developed with React - features useContext for global states, elegant logic and data structures.",
        },
        {   name: "English Department",
            tag: "corporate",
            url: "https://english-dept.ericcanosa.com",
            repo: "https://github.com/canosaer/english-dept",
            desc: "I've been working for the Emory English Department since 2016 and have always felt limited by the university's content management system. My take on the department's website leans heavily into css grid, custom properties, and efficient layouts.",
        },
        {   name: "Game Store",
            tag: "games",
            url: "https://game-store.ericcanosa.com",
            repo: "https://github.com/canosaer/game-store",
            desc: "A reproduction of the website of one of my favorite board game publishers. Dynamic content includes a news section, shop items, and a shopping cart. Features a custom carousel, routing, and global state management with React hooks.",
        },
        {   name: "Landscape Letters",
            tag: "3d",
            url: "https://drive.google.com/drive/folders/1QlMELzrJtXiWttzpgtpjjUjDW_u1jmXg?usp=sharing",
            repo: "https://github.com/canosaer/landscape-letters",
            desc: 'A recreation of lithographic letters from "The Landscape Alphabet" by L. E. M. Jones with realistic three-dimensional landscapes modeled in Cinema 4D.',
        },
        {   name: "Mind Bubble",
            tag: "corporate",
            url: "https://mindbubble.ericcanosa.com",
            repo: "https://github.com/canosaer/mind-bubble-react",
            desc: "I'm the cofounder of Mind Bubble, an education non-profit that makes learning fun. This redesign of Mind Bubble's home page adds useful JavaScript functionailty and evokes the organization's playful and interactive vibe.",
        },
        {   name: "Movie Database",
            tag: "api",
            url: "https://movie-database.ericcanosa.com",
            repo: "https://github.com/canosaer/movie-database",
            desc: "A movie lookup tool that searches a remote database as you type. Features async/await, axios, debouncing with React state, and functional styles.",
        },
        {   name: "New York Times",
            tag: "api",
            url: "https://nyt.ericcanosa.com",
            repo: "https://github.com/canosaer/nyt-react",
            desc: "An article lookup tool using the New York Times' API. Fully responsive with CSS Grid. Narrow search by date range and sort results by relevance, oldest, or newest.",
        },
        {   name: "Olea",
            tag: "corporate",
            url: "https://olea.ericcanosa.com",
            repo: "https://github.com/canosaer/olea",
            desc: "A clean, modern webcommerce site. HTML encoded with BEM methodology enables elegant and readable CSS. The client's design files were faithfully reproduced with close attention to detail and a strong understanding of responsive design techniques.",
        },
        {   name: "Star Wars Poster",
            tag: "animation",
            url: "https://poster-animation.ericcanosa.com",
            repo: "https://github.com/canosaer/poster-animation",
            desc: "I've loved the Star Wars movies since I was a kid, so I was delighted to pay homage to the francise with this animated poster. The GSAP animation library brings the scene to life with its powerful timeline tool.",
        },
        {   name: "Yelp",
            tag: "api",
            url: "https://yelp.ericcanosa.com",
            repo: "https://github.com/canosaer/yelp-react",
            desc: "A business lookup tool using Yelp's API. Features a variety of search filters and custom-built menus. Search location defaults to my hometown, Atlanta!",
        },
        
    ]
}

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200)

    let data = null

    if(req.url === '/favicon.ico') data = null
    else if(req.url === '/categories'){
        data = projectData.categories
    }
    else if(req.url === '/3d'){
        data = projectData.projects.filter(project => project.tag === '3d')
    }
    else if(req.url === '/animation'){
        data = projectData.projects.filter(project => project.tag === 'animation')
    }
    else if(req.url === '/api'){
        data = projectData.projects.filter(project => project.tag === 'api')
    }
    else if(req.url === '/corporate'){
        data = projectData.projects.filter(project => project.tag === 'corporate')
    }
    else if(req.url === '/games'){
        data = projectData.projects.filter(project => project.tag === 'games')
    }
    else data = projectData.projects

    res.write(JSON.stringify(data))
    res.end()

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})