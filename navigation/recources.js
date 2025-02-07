// Math resources data with descriptions
const resources = {
    books: [
        { title: "The Art of Problem Solving", link: "https://artofproblemsolving.com/books", description: "A series of books designed for competitive math students." },
        { title: "Concrete Mathematics", link: "https://www.goodreads.com/book/show/112243.Concrete_Mathematics", description: "A deep dive into fundamental mathematics used in computer science." },
        { title: "How to Solve It", link: "https://www.goodreads.com/book/show/391366.How_to_Solve_It", description: "A classic guide on problem-solving techniques in mathematics." }
    ],
    websites: [
        { name: "Khan Academy", link: "https://www.khanacademy.org/math", description: "Free online courses covering a wide range of math topics." },
        { name: "Art of Problem Solving", link: "https://artofproblemsolving.com/", description: "An advanced platform for math enthusiasts and Olympiad students." },
        { name: "Brilliant", link: "https://brilliant.org/", description: "Interactive learning for math, science, and programming." }
    ],
    youtube: [
        { name: "3Blue1Brown", link: "https://www.youtube.com/c/3blue1brown", description: "Visual explanations of deep mathematical concepts." },
        { name: "Numberphile", link: "https://www.youtube.com/c/numberphile", description: "Fun and fascinating videos on numbers and mathematical concepts." },
        { name: "Mathologer", link: "https://www.youtube.com/c/Mathologer", description: "Deep dives into interesting math problems and theories." }
    ],
    other: [
        { name: "Project Euler", link: "https://projecteuler.net/", description: "A collection of challenging math and programming problems." },
        { name: "MIT OpenCourseWare - Math", link: "https://ocw.mit.edu/courses/mathematics/", description: "Free university-level math courses from MIT." }
    ]
};

// Function to display resources with descriptions
function displayResources() {
    Object.keys(resources).forEach(category => {
        const list = document.getElementById(`${category}-list`);
        list.innerHTML = "";
        resources[category].forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <a href="${item.link}" target="_blank"><strong>${item.title || item.name}</strong></a>
                <p>${item.description}</p>
            `;
            list.appendChild(li);
        });
    });
}

// Function to filter resources
function filterResources() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    
    Object.keys(resources).forEach(category => {
        const list = document.getElementById(`${category}-list`);
        list.innerHTML = "";
        resources[category].forEach(item => {
            if ((item.title || item.name).toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)) {
                const li = document.createElement("li");
                li.innerHTML = `
                    <a href="${item.link}" target="_blank"><strong>${item.title || item.name}</strong></a>
                    <p>${item.description}</p>
                `;
                list.appendChild(li);
            }
        });
    });
}

// Load resources and add event listener for search
document.addEventListener("DOMContentLoaded", () => {
    displayResources();
    document.getElementById("search").addEventListener("input", filterResources);
});
resources.books.push({
    title: "New Math Book",
    link: "https://example.com",
    description: "An amazing book that covers advanced calculus."
});
resources.websites.push({
    title: "New Math website",
    link: "https://example.com",
    description: "An amazing website that covers advanced calculus."
});
resources.youtube.push({
    title: "New Math YouTubeChannel",
    link: "https://example.com",
    description: "An amazing YouTube channel that covers advanced calculus."
});
resources.other.push({
    title: "New Math Something",
    link: "https://example.com",
    description: "An amazing something that covers advanced calculus."
});
