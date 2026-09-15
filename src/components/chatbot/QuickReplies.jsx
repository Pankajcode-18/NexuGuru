/* QuickReplies.jsx – tappable chip row */
export default function QuickReplies({ chips, onSelect }) {
  return (
    <div className="chat-chips" role="list" aria-label="Quick reply options">
      {chips.map((chip) => (
        <button
          key={chip}
          className="chat-chip"
          role="listitem"
          onClick={() => onSelect(chip)}
          aria-label={`Quick reply: ${chip}`}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
