const GITHUB_USERNAME = "Nachuski";

const fetchGitHubRepos = async () => {
    const reposContainer = document.getElementById('repos');
    const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch GitHub repositories");
        }

        const repos = await response.json();

        // Clear container and add repos
        reposContainer.innerHTML = repos
            .map(repo => {
                return `
                    <div class="repo">
                        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                        <p>${repo.description || "No description available."}</p>
                    </div>
                `;
            })
            .join('');
    } catch (error) {
        reposContainer.innerHTML = `<p>Error loading repositories: ${error.message}</p>`;
    }
};

document.addEventListener('DOMContentLoaded', fetchGitHubRepos);

const displayTimeZone = async () => {
    try {
        const response = await fetch('/api/timezone'); 
        if (!response.ok) {
            throw new Error('Failed to fetch time zone data');
        }
        const { currentTime, timeZone } = await response.json();
        
        console.log({ currentTime, timeZone });

        const timeZoneContainer = document.getElementById('time-zone');
        timeZoneContainer.innerHTML = `
            <p>Current Time: ${currentTime}</p>
            <p>Time Zone: ${timeZone}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        const timeZoneContainer = document.getElementById('time-zone');
        timeZoneContainer.innerHTML = 'Error loading time zone data';
    }
};

document.addEventListener('DOMContentLoaded', displayTimeZone);
