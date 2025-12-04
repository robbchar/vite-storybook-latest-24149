export const List = ({ items, label = 'List' }: { items: string[], label?: string }) => {
  if (items.length === 0) {
    return <div>No items</div>;
  }
  return (
    <div>
      <h1>{label}</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};