// Math resources data with descriptions
const resources = {
    books: [
        { title: "The Art of Problem Solving", link: "https://artofproblemsolving.com/wiki/index.php/Olympiad_books", description: "A series of books designed for competitive math students." },
        { title: "The Art of Problem Solving (Paid)", link: "https://artofproblemsolving.com/wiki/index.php/Mathematics_books#General_Introduction_.2F_Multiple_Topics", description: "A series of books designed for competitive math students.(mostly paid, but you can use it as reference)" },
        { title: "МЦНМО", link: "https://old.mccme.ru/free-books/", description: "На этой странице размещены материалы (полные тексты) свободно распространяемых книг." },
        { name: "libgen", link: "https://libgen.is", description: "Free books" },
        //{ name: "", link: "", description: "" },
        { title: "How to Solve It", link: "https://math.hawaii.edu/home/pdf/putnam/PolyaHowToSolveIt.pdf", description: "A classic guide on problem-solving techniques in mathematics." }
    ],
    websites: [
        { name: "Khan Academy", link: "https://www.khanacademy.org/math", description: "Free online courses covering a wide range of math topics." },
        { name: "Art of Problem Solving", link: "https://artofproblemsolving.com/", description: "An advanced platform for math enthusiasts and Olympiad students." },
        { name: "Olimpiada ru", link: "https://olimpiada.ru/", description: "Российский сайт по олимпиадам." },
        { name: "Сириус курсы", link: "https://edu.sirius.online/#/", description: "Продвинутые курсы для школьников, учителей и всех желающих." },
        { name: "Brilliant", link: "https://brilliant.org/", description: "Interactive learning for math, science, and programming." },
        { name: "Geogebra", link: "https://www.geogebra.org", description: "Free tool for making geometric diagrams." },
        { name: "Wolframalppha", link: "https://www.wolframalpha.com/", description: "Solves various math problems." },
        { name: "Desmos", link: "https://www.desmos.com/calculator", description: "Graphing calculator." },
        { name: "Symbolab", link: "https://www.symbolab.com", description: "Multifunctional calculator." },
        //{ name: "", link: "", description: "" },
        { name: "Math is fun", link: "https://www.mathsisfun.com/", description: "Math in a fun entertaing way." }
    ],
    youtube: [
        { name: "3Blue1Brown", link: "https://www.youtube.com/@3blue1brown", description: "Visual explanations of deep mathematical concepts." },
        { name: "Numberphile", link: "https://www.youtube.com/@numberphile", description: "Videos about numbers and mathematics." },
        { name: "Mathologer", link: "https://www.youtube.com/@Mathologer", description: "Enter the world of the Mathologer for really accessible explanations of hard and beautiful math(s). " },
        { name: "Борис Трушин", link: "https://www.youtube.com/@trushinbv", description: "Сложные темы простым языком." },
        { name: "Vital Math", link: "https://www.youtube.com/@VitalMath", description: "Канал о гармонии, порядке и красоте." },
        { name: "Mathin", link: "https://www.youtube.com/@Mathin2049", description: "Канал с новым подходом к обучению математики" },
        { name: "Math The World", link: "https://www.youtube.com/@MathTheWorld", description: "A math project dedicated to bringing real life context to math! " },
        { name: "Математический Мирок", link: "https://www.youtube.com/@FrolovSergei", description: "решения математических задачек, выводы формул и доказательства математических утверждений." },
        { name: "Tutor Online", link: "https://www.youtube.com/@TutorOnline_ru", description: "Школьная математика" },
        //{ name: "", link: "https://www.youtube.com/@", description: "" },
        { name: "Маткульт-привет!", link: "https://www.youtube.com/@Маткульт-приветАлексейСавватее", description: "Лекции доктора математических наук Алексея Савватеева" }
    ],
    other: [
        { name: "Project Euler", link: "https://projecteuler.net/", description: "A collection of challenging math and programming problems." },
        //{ name: "", link: "", description: "" },
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

/*
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
*/
