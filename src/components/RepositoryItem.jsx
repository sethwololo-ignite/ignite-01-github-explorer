export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default Name'}</strong>
      <p>{repository?.description ?? 'Default Description'}</p>

      <a href={repository?.html_url ?? '#'}>
        Acess repository
      </a>
    </li>
  )
}
