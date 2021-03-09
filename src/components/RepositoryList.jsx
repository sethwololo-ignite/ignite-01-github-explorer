import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

// const repository = {
//   name: 'unform',
//   description: 'Forms in React',
//   link: 'https://github.com/unform/unform'
// }

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(repositories => setRepositories(repositories));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.length <= 0 ? <h1>Carregando...</h1> : repositories.map(repository => <RepositoryItem repository={repository} key={repository.id} />)}
      </ul>
    </section>
  );
}
