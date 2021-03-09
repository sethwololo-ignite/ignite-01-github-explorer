interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem({ repository }: RepositoryItemProps) {
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
