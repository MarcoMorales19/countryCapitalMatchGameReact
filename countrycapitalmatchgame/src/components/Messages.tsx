
interface ResultProps {
  isWinner: boolean;
}

const messages: React.FC<ResultProps> = ({ isWinner }) => {
  return (
    <div>
    {isWinner ? (
      <h1>Congratulations! You are the winner!</h1>
    ) : (
      <h1>Sorry, you lost. Better luck next time!</h1>
    )}
  </div>
  )
}

export default messages;

