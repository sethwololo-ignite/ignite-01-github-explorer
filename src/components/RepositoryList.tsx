import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/sethwololo/repos')
      .then(response => response.json())
      .then(repositories => setRepositories(repositories));
  }, []);

  return (
    <section className="repository-list">
      <h1>Sethwololo's repositories</h1>

      <ul>
        {repositories.length <= 0 ? <h1>Carregando...</h1> : repositories.map(repository => <RepositoryItem repository={repository} key={repository.id} />)}
      </ul>
    </section>
  );
}
