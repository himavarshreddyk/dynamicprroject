const works = {
    "task1": { "title": "Project 1", "url": "works/task1/task1.txt" },
    "task2": { "title": "Project 2", "url": "works/task2/second.html" },
    "task3": { "title": "Project 3", "url": "works/task3/demo.html" },
    "task4": { "title": "Project 4", "url": "works/task4/hima.html" },
    "task5": { "title": "Project 5", "url": "works/task5/html.html" },
    "task7": { "title": "Project 7", "url": "works/task7/calu.html" },
    "task8": { "title": "Project 8", "url": "works/task8/hima-1.html" },
    "task9": { "title": "Project 9", "url": "works/task9/new.html" },
    "task10": { "title": "Project 10", "url": "works/task10/stack-1.html" },
    "task11": { "title": "Project 11", "url": "works/task11/script.html" },
    "task12": { "title": "Project 12", "url": "works/task12/script-1.html" },
    "task13": { "title": "Project 13", "url": "works/task13/objects.html" },
    "task14": { "title": "Project 14", "url": "works/task14/math.html" },
    "task15": { "title": "Project 15", "url": "works/task15/new-1.html" },
};

// Function to create the navigation menu
function createNav() {
    const navPanel = document.getElementById("navPanel");

    Object.values(works).forEach(work => {
        let link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.classList.add("nav-link");  // Add class for styling
        link.onclick = function () {
            loadWork(work.url);
            highlightActiveLink(link);  // Highlight active link
            return false; // Prevent default link behavior
        };
        navPanel.appendChild(link);
    });
}

// Function to load the selected work inside an iframe
function loadWork(url) {
    const iframe = document.getElementById("contentFrame");
    
    // Only change the iframe content if the URL is different from the current one
    if (iframe.src !== url) {
        iframe.src = url;
    }
}

// Function to highlight the active link
function highlightActiveLink(activeLink) {
    const links = document.querySelectorAll(".nav-link");
    
    // Remove the 'active' class from all links
    links.forEach(link => link.classList.remove("active"));

    // Add the 'active' class to the clicked link
    activeLink.classList.add("active");
}

// Initialize the navigation menu
createNav();
