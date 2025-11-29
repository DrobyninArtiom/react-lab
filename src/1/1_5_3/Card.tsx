// 1_5_3 Passing JSX in a children prop - Created Card component that accepts children to display different content
interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
