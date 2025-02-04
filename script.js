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
